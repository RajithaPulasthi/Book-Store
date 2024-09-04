import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  optimizeDeps: {
    exclude: ['js-big-decimal']
  },
  server: {
    hmr: {
      overlay: true,
    },
  },
})