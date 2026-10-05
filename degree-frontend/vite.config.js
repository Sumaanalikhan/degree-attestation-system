import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
server: {
    host: true, // This forces Vite to listen on 0.0.0.0 (all network interfaces)
    port: 5173,
    strictPort: true
}
})
