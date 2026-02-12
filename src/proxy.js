import { NextResponse } from 'next/server';

export function proxy(request) {
    const path = request.nextUrl.pathname;
    const isPublicPath = path === '/login' || path === '/register';
    const session = request.cookies.get('session_user')?.value;

    // 1. Redirect unauthenticated users from protected routes to register
    if (path.startsWith('/dashboard') && !session) {
        return NextResponse.redirect(new URL('/register', request.url));
    }

    // 2. Redirect authenticated users from public auth routes to dashboard
    if (isPublicPath && session) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/dashboard/:path*',
        '/login',
        '/register',
    ],
};
