import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    VitePWA({
      registerType: "autoUpdate", // Automatically update service worker

      // includeAssets: [
      //   "favicon.svg",
      //   "favicon.ico",
      //   "robots.txt",
      //   "apple-touch-icon.png",
      // ],
      // manifest: {
      //   name: "My Vite React PWA",
      //   short_name: "VitePWA",
      //   description: "My awesome Progressive Web App built with Vite + React",
      //   theme_color: "#ea580c",
      //   background_color: "#ffffff",
      //   display: "standalone",
      //   start_url: "/",
      //   icons: [
      //     {
      //       src: "/pwa-192x192.png",
      //       sizes: "192x192",
      //       type: "image/png",
      //     },
      //     {
      //       src: "/pwa-512x512.png",
      //       sizes: "512x512",
      //       type: "image/png",
      //     },
      //     {
      //       src: "/pwa-512x512.png",
      //       sizes: "512x512",
      //       type: "image/png",
      //       purpose: "any maskable",
      //     },
      //   ],
      // },
      strategies: "generateSW", // generates service worker with caching
      workbox: {
        runtimeCaching: [
          // ✅ GET requests (cache them)
          {
            urlPattern: /^https:\/\/jsonplaceholder\.typicode\.com\/.*/,
            method: "GET",
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "api-fetch-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },

          // ✅ Mutations (queue them)
          {
            urlPattern: /^https:\/\/jsonplaceholder\.typicode\.com\/.*/,
            method: "POST",
            handler: "NetworkOnly",
            options: {
              backgroundSync: {
                name: "api-create-queue",
                options: {
                  maxRetentionTime: 24 * 60,
                },
              },
            },
          },
          {
            urlPattern: /^https:\/\/jsonplaceholder\.typicode\.com\/.*/,
            method: "PUT",
            handler: "NetworkOnly",
            options: {
              backgroundSync: {
                name: "api-update-queue",
                options: {
                  maxRetentionTime: 24 * 60,
                },
              },
            },
          },
          {
            urlPattern: /^https:\/\/jsonplaceholder\.typicode\.com\/.*/,
            method: "DELETE",
            handler: "NetworkOnly",
            options: {
              backgroundSync: {
                name: "api-delete-queue",
                options: {
                  maxRetentionTime: 24 * 60,
                },
              },
            },
          },
        ],
      },
    }),
  ],
});
