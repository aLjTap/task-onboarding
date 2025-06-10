import { createFileRoute } from '@tanstack/react-router';
import CarDetail from '../../../CarDetail';

export const Route = createFileRoute("/car/$id")({
  component: CarDetail,
});
