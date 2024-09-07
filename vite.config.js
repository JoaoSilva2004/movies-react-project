import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://raw.githubusercontent.com/JoaoSilva2004/movies-react-project/main/",
  plugins: [react()],
})
