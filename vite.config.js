import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    chunkSizeWarningLimit: 650,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('/node_modules/three') || id.includes('/node_modules/.pnpm/three')) {
            return 'three';
          }

          return undefined;
        },
      },
    },
  },
});
