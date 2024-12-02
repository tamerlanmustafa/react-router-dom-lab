import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  server: {
    open: true, // Automatically opens the app in the browser
    watch: {
      usePolling: true, // Useful for certain environments
    },
  },

  plugins: [react()],
})
