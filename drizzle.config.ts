//this file is used to configure Drizzle ORM migrations
//it specifies the schema file, output directory for migrations, dialect, and database credentials

import type { Config } from 'drizzle-kit';

export default {
  schema: './server/db.ts',
  out: './server/migrations',
  dialect: 'sqlite',
  dbCredentials: {
    url: './server/db.sqlite3',
  },
} satisfies Config;
