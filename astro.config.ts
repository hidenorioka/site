import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

const SITE_URL = "https://hidenorioka.com";

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
  devToolbar: {
    enabled: false,
  },
});
