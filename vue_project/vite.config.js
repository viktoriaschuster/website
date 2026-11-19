import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// PREVIEW=1 inlines all images so the build can be bundled into one HTML file for previewing.
export default defineConfig({
  base: '/website/',
  plugins: [vue()],
  build: process.env.PREVIEW ? { assetsInlineLimit: 100000000 } : {},
})
