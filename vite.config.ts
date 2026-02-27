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
      injectRegister: "script",
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
          {
            urlPattern: /^https:\/\/jsonplaceholder\.typicode\.com\/.*$/,
            handler: "NetworkFirst",
            options: {
              cacheName: "api-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24, // 1 day
              },
            },
          },
        ],
      },
    }),
  ],
});
