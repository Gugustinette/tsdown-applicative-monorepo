import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'rolldown-vite'

export default defineConfig({
  server: {
    port: 9000,
  },
  plugins: [vue()],
})
