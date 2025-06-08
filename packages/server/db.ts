import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';


const db = new Database('./db.sqlite3');


export const drizzleDb = drizzle(db);

// cars table definition
export const cars = sqliteTable('cars', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  make: text('make').notNull(),
  model: text('model').notNull(),
  year: integer('year').notNull(),
  price: integer('price').notNull(),
  description: text('description'),
  imageUrl: text('imageUrl'),
});
