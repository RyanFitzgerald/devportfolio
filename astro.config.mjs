// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://rachitpanchal15-cyber.github.io',
  base: '/ryanfitzgerald',
  vite: {
    plugins: [tailwindcss()],
  },
});