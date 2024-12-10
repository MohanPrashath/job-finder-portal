/* eslint-disable no-undef */
import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 10000  // Increase the limit to 10000 KB (10 MB)
  },
    build: {
    rollupOptions: {
      // Example: Adjust rollup configuration if necessary
      input: 'src/main.jsx', // Ensure this is correct
      output: {
        dir: 'dist',
        format: 'es', // Adjust output format as needed
      },
    },
  }
});




