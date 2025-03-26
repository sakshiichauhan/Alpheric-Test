import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"
import { imagetools } from 'vite-imagetools'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    imagetools()
  ],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  },
  server: {
    port: 3000,
    strictPort: true
  }
})
