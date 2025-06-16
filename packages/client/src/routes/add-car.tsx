import { createFileRoute } from '@tanstack/react-router';
import AddCarForm from '../../AddCarForm';

export const Route = createFileRoute('/add-car')({
  component: AddCarForm,
});
