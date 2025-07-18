import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/k8s-interactive-course/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
