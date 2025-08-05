import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // 👇 Set base path for relative asset loading on Netlify
  base: './',

  server: {
    port: 3000,
    open: true,
  },

  build: {
    outDir: 'dist',      // Output folder for production build
    sourcemap: false,     // Disable sourcemaps for smaller bundle
    rollupOptions: {
      output: {
        format: 'es',
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]', // JS/CSS/images
      },
    },
  },
});
