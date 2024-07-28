import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
  base: '/search_meals/',
  plugins: [vue()],
  resolve: {
    alias: [
      
    ]
  },
})



