import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    // For GitHub Pages project sites, set VITE_BASE to "/<repo>/"
    // Example: VITE_BASE="/rui-labs/"
    base: env.VITE_BASE || '/',
  }
})
