// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // IMPORTANT: The `site` value should match your real GitHub Pages URL exactly.
  // If your GitHub username is for example `Sulaiman-Dawood`, the user site is:
  //   https://sulaiman-dawood.github.io
  // Adjust the value below if needed (GitHub is case-insensitive but the dash matters!).
  site: 'https://sulaiman-dawood.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
