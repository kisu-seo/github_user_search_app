import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages project site is served from /github_user_search_app/, not the domain root.
  base: '/github_user_search_app/',
  plugins: [react()],
})
