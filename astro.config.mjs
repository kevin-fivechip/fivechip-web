// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://fivechip.com",
  // Pages build to files like services.html; Firebase Hosting's cleanUrls
  // serves them at /services (see firebase.json). Keep these two in step.
  trailingSlash: "never",
  build: { format: "file" },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
