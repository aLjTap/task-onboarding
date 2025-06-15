import { createFileRoute } from '@tanstack/react-router';
import CarList from '../../../../packages/client/CarList';

export const Route = createFileRoute('/')({
  component: CarList,
});
