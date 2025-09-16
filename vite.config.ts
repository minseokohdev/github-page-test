import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => ({
  plugins: [react()],
  base: command === 'build' && mode === 'production' ? '/github-page-test/' : '/',
  build: {
    outDir: 'dist',
    sourcemap: false // GitHub Pages용
  },
  server: {
    port: 3000,
    open: true
  },
  preview: {
    port: 4173,
    open: true
  }
}))
