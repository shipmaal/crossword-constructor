import 'dotenv/config';
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from 'postgres'

const connectionString = process.env.POSTGRES_URL as string;
console.log(connectionString);
export const client = postgres(connectionString, { max: 1, prepare: false});
export const db = drizzle(client);
