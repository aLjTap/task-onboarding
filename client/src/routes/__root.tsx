import React from 'react';
import { createRootRoute, Outlet, Link } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: () => (
    <div>
      <nav className="flex gap-4 p-4 bg-gray-100">
        <Link to="/">Araçlar</Link>
        <Link to="/add-car">Yeni Araç Ekle</Link>
      </nav>
      <Outlet />
    </div>
  ),
});
