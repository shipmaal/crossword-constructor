import 'dotenv/config'
import type { Config } from "drizzle-kit";
export default {
  schema: "./src/schema.ts",
  out: "./drizzle",
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL as string,
  },
} satisfies Config;