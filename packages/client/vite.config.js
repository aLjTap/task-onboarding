import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
  plugins: [TanStackRouterVite({}), react(), tsconfigPaths(), tailwindcss()],
  server: {
    port: 5173,
    open: true,
    proxy: {
    '/api': 'http://localhost:3000',
  },
  },
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: {
      "@client": path.resolve(__dirname, "./src"),
      "@server": path.resolve(__dirname, "../server/src"),
    },
  },
});
