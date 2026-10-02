import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // The @ alias for src, as shadcn/ui expects.
  resolve: {
    alias: { '@': path.resolve(import.meta.dirname, './src') },
  },
  // The footer's copyright year is the year the site is built.
  define: {
    __BUILD_YEAR__: JSON.stringify(new Date().getFullYear()),
  },
})
