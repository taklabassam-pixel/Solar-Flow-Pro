import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  // 🟢 تعديل المسار الأساسي لبطابق اسم مستودع Solar-Flow-Pro
  base: '/Solar-Flow-Pro/',

  plugins: [react()],
  root: process.cwd(),
  server: {
    fs: {
      strict: true,
      allow: [process.cwd()]
    },
    watch: {
      usePolling: false,
      ignored: [
        '**/node_modules/**',
        '**/.git/**',
        'C:/Users/h/AppData/**',
        'C:/Users/h/AppData/Roaming/Code/**'
      ]
    }
  }
})