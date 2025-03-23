import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/VAMONOZ/',
  build: {
    outDir: 'dist',
    sourcemap: true,
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
        assetFileNames: 'assets/[name].[hash].[ext]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
  },
  server: {
    headers: {
      'Content-Security-Policy': "default-src 'self' https://dostansenaprava.cz; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://dostansenaprava.cz; style-src 'self' 'unsafe-inline' https://dostansenaprava.cz; img-src 'self' data: https://dostansenaprava.cz",
      'X-Content-Type-Options': 'nosniff',
    },
  },
}) 