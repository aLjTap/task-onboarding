import React from "react";
import { createRootRoute, Outlet, Link } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <div>
      <Outlet />
    </div>
  ),
});
