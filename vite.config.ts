import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/github-page-test/',
  build: {
    outDir: 'dist',
    sourcemap: false // GitHub Pages용
  },
  server: {
    port: 3000,
    open: true
  }
})
