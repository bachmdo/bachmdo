import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  base: '/bachmdo/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    rollupOptions: {
      input: 'src/index.html'
    }
  },
  publicDir: 'public'
}) 