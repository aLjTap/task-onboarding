import React, { useEffect, useState } from 'react';
import CarItem from './CarItem';

interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  description: string;
  imageUrl?: string;
}

const CarList: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);

  const fetchCars = async () => {
    const res = await fetch('/api/cars');
    const data = await res.json();
    setCars(data);
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const handleDelete = async (id: number) => {
    await fetch(`/api/cars/${id}`, { method: 'DELETE' });
    fetchCars();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-background">
      {cars.map(car => (
        <CarItem key={car.id} car={car} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default CarList;
