import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/pk-app/',
  plugins: [react(), VitePWA({
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.png'],
    manifest: {
      name: 'Praktikakohvik',
      short_name: 'PK',
      description: 'Praktikakohvik is an internship fair aimed at TalTech students',
      theme_color: '#ff6776',
      background_color: '#ff6776',
      display: 'standalone',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes:'192x192',
          type:'image/png'
        },
        {
          src:'pwa-512x512.png',
          sizes:'512x512',
          type:'image/png'
        }
      ]
    }
  })],
})
