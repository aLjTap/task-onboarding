import { Hono } from 'hono';
import { serve } from '@hono/node-server'; // Bu önemli!
import carsRoute from './routes/cars';

const app = new Hono();

app.get('/', (c) => {
  return c.text('Galerim+ API çalışıyor!');
});

app.route('/api/cars', carsRoute);

// 💥 Burada sunucuyu başlat
serve({ fetch: app.fetch, port: procces.env.API_PORT});
console.log("🚗 Galerim+ API çalışıyor: http://localhost:3000");

