//this file is used to configure Drizzle ORM migrations
//it specifies the schema file, output directory for migrations, dialect, and database credentials

import 'dotenv/config';
import type { Config } from 'drizzle-kit';

export default {
  schema: './packages/server/db.ts',
  out: './packages/server/migrations',
  dialect: 'turso',
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL || '',
    authToken: process.env.TURSO_AUTH_TOKEN || '',
  },
} satisfies Config;
