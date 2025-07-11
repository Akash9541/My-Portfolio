// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "./", // ✅ important for correct file paths on Vercel
  plugins: [react()],
})
