import { createFileRoute } from '@tanstack/react-router';
import EditCarForm from '../../../EditCarForm';

export const Route = createFileRoute("/edit-car/$id")({
  component: EditCarForm,
});
