import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

const SITE_URL = "https://hidenorioka.github.io";
const BASE_NAME = "/site";

export default defineConfig({
  site: SITE_URL,
  base: BASE_NAME,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
