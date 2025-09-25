// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  // Use the full GitHub Pages site URL and set base to the repository name.
  // Update these if you deploy to a different org/user or repository.
  site: "https://prithvi1739.github.io/Portfolio/",
  base: "/Portfolio/",

});
