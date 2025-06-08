import { createFileRoute } from '@tanstack/react-router';
// Make sure the file exists at ../CarList.tsx or ../CarList/index.tsx
// If the file is named differently, update the import path accordingly
// Example if the file is named CarList.tsx:
import CarList from 'client/CarList.tsx';
// Example if the file is in a folder named CarList with index.tsx:
// import CarList from '../CarList';

export const Route = createFileRoute('/')({
  component: CarList,
});
