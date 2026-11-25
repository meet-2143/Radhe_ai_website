import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Env vars with these prefixes are exposed to client code via import.meta.env
  envPrefix: ['VITE_', 'WEB3FORMS_'],
})
