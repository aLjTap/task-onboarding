import React, { useState } from 'react';

const AddCarForm: React.FC = () => {
  const [form, setForm] = useState({
    make: '',
    model: '',
    year: '',
    price: '',
    description: '',
    imageUrl: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/cars', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        year: Number(form.year),
        price: Number(form.price),
      }),
    });
    window.location.href = '/';
  };

  return (
    <form className="max-w-md mx-auto p-4 flex flex-col gap-2" onSubmit={handleSubmit}>
      <input name="make" placeholder="Marka" value={form.make} onChange={handleChange} required className="border p-2 rounded" />
      <input name="model" placeholder="Model" value={form.model} onChange={handleChange} required className="border p-2 rounded" />
      <input name="year" placeholder="Yıl" value={form.year} onChange={handleChange} required type="number" className="border p-2 rounded" />
      <input name="price" placeholder="Fiyat" value={form.price} onChange={handleChange} required type="number" className="border p-2 rounded" />
      <textarea name="description" placeholder="Açıklama" value={form.description} onChange={handleChange} className="border p-2 rounded" />
      <input name="imageUrl" placeholder="Görsel URL'si" value={form.imageUrl} onChange={handleChange} className="border p-2 rounded" />
      <button type="submit" className="bg-blue-600 text-white py-2 rounded mt-2">Ekle</button>
    </form>
  );
};

export default AddCarForm;
