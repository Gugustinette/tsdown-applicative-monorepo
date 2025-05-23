import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'rolldown-vite'

export default defineConfig({
  root: './playground',
  plugins: [vue()],
})
