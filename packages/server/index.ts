import 'dotenv/config';
import { Hono } from 'hono';
import { serve } from '@hono/node-server'; 
import carsRoute from './routes/cars';
import { drizzle } from 'drizzle-orm/libsql';

// Initialize drizzle with Turso (libsql) connection
const db = drizzle({
  connection: {
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!
  }
});

const app = new Hono();

app.get('/', (c) => {
  return c.text('Galerim+ API çalışıyor!');
});

app.route('/api/cars', carsRoute);

// Burada sunucuyu başlat
serve({ fetch: app.fetch, port: Number(process.env.API_PORT) });
console.log(`🚗 Galerim+ API çalışıyor: http://localhost:${process.env.API_PORT}`);

