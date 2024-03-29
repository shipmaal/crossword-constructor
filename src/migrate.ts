import 'dotenv/config';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { db, client } from './db';

async function main() {
    await migrate(db, { migrationsFolder: './drizzle' });

    // Don't forget to close the connection, otherwise the script will hang
    await client.end();
}

main()