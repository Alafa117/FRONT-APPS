import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Puerto donde corre el frontend
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Enlace al backend
        changeOrigin: true,
        secure: false,
      }
    }
  }
});