import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { splitVendorChunkPlugin } from "vite";
import path from "path";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin(), TanStackRouterVite()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
