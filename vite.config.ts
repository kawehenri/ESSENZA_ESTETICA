import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Necessário para GitHub Pages em repositório de projeto:
  // https://kawehenri.github.io/ESSENZA_ESTETICA/
  base: '/ESSENZA_ESTETICA/',
})
