// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/My-portfolio/", // 👈 this is very important
  plugins: [react()],
})
