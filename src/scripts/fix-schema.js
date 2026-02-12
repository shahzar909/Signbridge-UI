const { Pool } = require('@neondatabase/serverless');
const dotenv = require('dotenv');
dotenv.config({ path: '.env' });
dotenv.config({ path: '.env.local' });

if (!process.env.signbridge_db) {
    console.error('signbridge_db environment variable is missing');
    process.exit(1);
}

const pool = new Pool({
    connectionString: process.env.signbridge_db,
});

async function fixSchema() {
    try {
        console.log('Fixing schema...');

        // Alter columns to allow longer values
        await pool.query('ALTER TABLE users ALTER COLUMN password TYPE text');
        await pool.query('ALTER TABLE users ALTER COLUMN email TYPE varchar(255)');
        // 'username' might be the column name now based on user edit, but let's check or just try altering both name and username if they exist, or just username.
        // The user changed the insert query to use 'username'.
        // If the column was renamed from 'name' to 'username', we might need to handle that.
        // However, the error was "value too long", implying the column exists.
        // I will try to alter 'username'. If it fails, I'll catch it.
        try {
            await pool.query('ALTER TABLE users ALTER COLUMN username TYPE varchar(255)');
        } catch (e) {
            console.log('Could not alter username (maybe it is still called name?):', e.message);
            try {
                await pool.query('ALTER TABLE users ALTER COLUMN name TYPE varchar(255)');
            } catch (e2) {
                console.log('Could not alter name either:', e2.message);
            }
        }

        console.log('Schema fixed successfully.');
    } catch (error) {
        console.error('Error fixing schema:', error);
    } finally {
        await pool.end();
    }
}

fixSchema();
