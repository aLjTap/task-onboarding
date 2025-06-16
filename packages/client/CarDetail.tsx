import React, { useEffect, useState } from 'react';
import { useParams } from '@tanstack/react-router';

const CarDetail: React.FC = () => {
  const { id } = useParams({ from: '/car/:id' });
  const [car, setCar] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/cars/${id}`)
      .then(res => res.json())
      .then(data => {
        setCar(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Yükleniyor...</div>;
  if (!car) return <div>Araç bulunamadı.</div>;

  return (
    <div className="max-w-lg mx-auto p-4 border rounded shadow flex flex-col gap-4">
      {car.imageUrl && <img src={car.imageUrl} alt={car.make + ' ' + car.model} className="w-full h-60 object-cover rounded" />}
      <div className="text-2xl font-bold">{car.make} {car.model} ({car.year})</div>
      <div className="text-xl text-blue-700 font-semibold">₺{car.price}</div>
      <div className="text-gray-700">{car.description}</div>
    </div>
  );
};

export default CarDetail;
