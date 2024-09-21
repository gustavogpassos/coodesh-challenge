import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default ({ mode }) => {

  import.meta.env = loadEnv(mode, process.cwd(), '')
  console.log(import.meta.env.VITE_API_URL)

  return defineConfig({
    base: '/',
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: import.meta.env.VITE_API_URL,
          changeOrigin: true
        }
      }
    }
  })
}