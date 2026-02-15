import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
    plugins: [
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg', 'vite.svg', '*.jpg', '*.png', '*.svg'],
            manifest: {
                name: '7 6 7 Kutubxona',
                short_name: '7 6 7 Kutubxona',
                description: 'Eng so\'nggi kutubxona ilovasi - bepul kitoblar va manbalar.',
                theme_color: '#ffffff',
                start_url: '/',
                display: 'standalone',
                background_color: '#ffffff',
                icons: [
                    {
                        src: 'vite.svg',
                        sizes: '192x192',
                        type: 'image/svg+xml'
                    },
                    {
                        src: 'vite.svg',
                        sizes: '512x512',
                        type: 'image/svg+xml'
                    }
                ]
            },
            workbox: {
                runtimeCaching: [
                    {
                        urlPattern: ({ url }) => url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com',
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'google-fonts-cache',
                        }
                    },
                    {
                        urlPattern: ({ url }) => url.origin === 'https://bilimmarkazi.uz',
                        handler: 'StaleWhileRevalidate',
                        options: {
                            cacheName: 'pdf-cache',
                            expiration: {
                                maxEntries: 20,
                                maxAgeSeconds: 60 * 60 * 24 * 7 // 7 Days
                            },
                            cacheableResponse: {
                                statuses: [0, 200]
                            }
                        }
                    },
                    {
                        urlPattern: ({ url }) => url.pathname.match(/\.(?:js|css|html|svg|png|jpg|jpeg)$/),
                        handler: 'StaleWhileRevalidate',
                        options: {
                            cacheName: 'static-resources',
                        }
                    }
                ]
            }
        })
    ],
    server: {
        allowedHosts: true,
        host: true
    }
})
