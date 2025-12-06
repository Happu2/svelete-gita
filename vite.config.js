import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [svelte()],
  base:'/svelete-gita/',
  server: {
    proxy: {
      "/geeta-api": {
        target: "https://www.sanskrit.ie/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) =>
          path.replace(/^\/geeta-api/, "api/geeta.php")
      }
    }
  }
});
