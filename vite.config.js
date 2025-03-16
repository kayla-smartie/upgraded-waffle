import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      // Add your proxy settings here
      '/WasteWise/waste_management/api': {
        target: 'http://localhost:80/waste_management',
        changeOrigin: true,
        //rewrite: (path) => path.replace(/^\/api/, '')
        // Optionally rewrite paths
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }    
})
