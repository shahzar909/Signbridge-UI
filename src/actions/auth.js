'use server';

import bcrypt from 'bcryptjs';
import pool from '@/lib/db';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

async function createSession(user) {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days
    const session = JSON.stringify({ id: user.id, email: user.email, username: user.username || user.name });

    (await cookies()).set('session_user', session, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        expires: expiresAt,
        sameSite: 'lax',
        path: '/',
    });
}

export async function logoutUser() {
    (await cookies()).delete('session_user');
    redirect('/login');
}

export async function registerUser(prevState, formData) {
    const fullname = formData.get('fullname');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    if (!fullname || !email || !password || !confirmPassword) {
        return { error: 'All fields are required' };
    }

    if (password !== confirmPassword) {
        return { error: 'Passwords do not match' };
    }

    try {
        // Check if user already exists
        const existingUser = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (existingUser.rows.length > 0) {
            return { error: 'User with this email already exists' };
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert new user
        const result = await pool.query(
            'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id',
            [fullname, email, hashedPassword]
        );

        const newUser = { id: result.rows[0].id, email, username: fullname };
        await createSession(newUser);

    } catch (error) {
        console.error('Registration error:', error);
        return { error: 'Something went wrong. Please try again.' };
    }

    redirect('/dashboard');
}

export async function loginUser(prevState, formData) {
    const email = formData.get('email');
    const password = formData.get('password');

    if (!email || !password) {
        return { error: 'Email and password are required' };
    }

    try {
        // Find user
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        const user = result.rows[0];

        if (!user) {
            return { error: 'Invalid credentials' };
        }

        // Verify password
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return { error: 'Invalid credentials' };
        }

        await createSession(user);

    } catch (error) {
        console.error('Login error:', error);
        return { error: 'Something went wrong. Please try again.' };
    }

    redirect('/dashboard');
}
