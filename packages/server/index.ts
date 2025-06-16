import 'dotenv/config';
import { Hono } from 'hono';
import { serve } from '@hono/node-server'; 
import carsRoute from './routes/cars';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client'; // EKLENDİ

// Turso client'ı oluştur
const client = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

// drizzle-orm ile veritabanı bağlan
export const db = drizzle(client); // Dışa aktarılıyor

const app = new Hono();

app.get('/', (c) => {
  return c.text('Galerim+ API çalışıyor!');
});

app.route('/api/cars', carsRoute);

// Sunucuyu başlat
serve({ fetch: app.fetch, port: Number(process.env.API_PORT) });
console.log(`🚗 Galerim+ API çalışıyor: http://localhost:${process.env.API_PORT}`);
