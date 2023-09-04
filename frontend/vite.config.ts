import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// yarn add @types/node -D
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
