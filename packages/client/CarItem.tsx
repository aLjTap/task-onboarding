import React from 'react';

interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  description: string;
  imageUrl?: string;
}

interface CarItemProps {
  car: Car;
  onDelete: (id: number) => void;
}

const CarItem: React.FC<CarItemProps> = ({ car, onDelete }) => (
  <div className="border rounded p-4 flex flex-col gap-2 shadow">
    {car.imageUrl && (
      <img src={car.imageUrl} alt={`${car.make} ${car.model}`} className="w-full h-40 object-cover rounded" />
    )}
    <div className="font-bold text-lg">{car.make} {car.model} ({car.year})</div>
    <div className="text-blue-700 font-semibold">₺{car.price}</div>
    <div className="text-sm text-gray-600">{car.description}</div>
    <div className="flex gap-2 mt-2">
      <button className="bg-yellow-500 text-white px-3 py-1 rounded" onClick={() => window.location.href = `/edit-car/${car.id}`}>Düzenle</button>
      <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => onDelete(car.id)}>Sil</button>
    </div>
  </div>
);

export default CarItem;
