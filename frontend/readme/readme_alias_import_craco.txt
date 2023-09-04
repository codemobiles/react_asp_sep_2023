https://www.youtube.com/watch?v=kF0TprhN1vg

https://dev.to/avxkim/setup-path-aliases-w-react-vite-ts-poa

https://www.youtube.com/watch?v=XA7Nwkqjo1Q&list=PLjPfp4Ph3gBqF8Ds-mhTUPU7MRknTJtWd

# edit files
- vite.config.ts

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 3000 },
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});




- tsconfig.json:
"baseUrl": "src",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["components/*"],
      "@/types/*": ["types/*"],
      "@/constaints/*": ["constaints/*"],
      "@/utils/*": ["utils/*"],
      "@/store/*": ["store/*"],
      "@/assets/*": ["assets/*"]
    }

# example

