import { Hono } from 'hono';
import { db, cars } from '../db';
import { eq } from 'drizzle-orm';

const app = new Hono();

// Tüm arabaları getir
app.get('/', async (c) => {
  const allCars = await db.select().from(cars).all();
  return c.json(allCars);
});

// Belirli ID'ye sahip arabayı getir
app.get('/:id', async (c) => {
  const id = Number(c.req.param('id'));
  const car = await db.select().from(cars).where(eq(cars.id, id)).get();
  if (!car) return c.text('Car not found', 404);
  return c.json(car);
});

// Yeni araba ekle
app.post('/', async (c) => {
  const data = await c.req.json();

  // Validation
  if (!data.make || !data.model || !data.year || !data.price) {
    return c.text('Eksik alanlar', 400);
  }
  if (isNaN(data.year) || data.year < 1900 || data.year > new Date().getFullYear() + 1) {
    return c.text('Yıl geçerli değil', 400);
  }
  if (isNaN(data.price) || data.price <= 0) {
    return c.text('Fiyat pozitif olmalı', 400);
  }

  const result = await db.insert(cars).values({
    make: data.make,
    model: data.model,
    year: data.year,
    price: data.price,
    description: data.description || '',
    imageUrl: data.imageUrl || '',
  }).run();

  return c.json({ id: result.lastInsertRowid });
});

// Arabayı güncelle
app.put('/:id', async (c) => {
  const id = Number(c.req.param('id'));
  const data = await c.req.json();

  if (!data.make || !data.model || !data.year || !data.price) {
    return c.text('Eksik alanlar', 400);
  }
  if (isNaN(data.year) || data.year < 1900 || data.year > new Date().getFullYear() + 1) {
    return c.text('Yıl geçerli değil', 400);
  }
  if (isNaN(data.price) || data.price <= 0) {
    return c.text('Fiyat pozitif olmalı', 400);
  }

  const updated = await db
    .update(cars)
    .set({
      make: data.make,
      model: data.model,
      year: data.year,
      price: data.price,
      description: data.description || '',
      imageUrl: data.imageUrl || '',
    })
    .where(eq(cars.id, id))
    .run();

  if (updated.rowsAffected === 0) return c.text('Car not found', 404);
  return c.text('Updated', 200);
});

// Arabayı sil
app.delete('/:id', async (c) => {
  const id = Number(c.req.param('id'));
  const deleted = await db.delete(cars).where(eq(cars.id, id)).run();
  if (deleted.rowsAffected === 0) return c.text('Car not found', 404);
  return c.text('Deleted', 200);
});

export default app;
