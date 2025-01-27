import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";

const SITE_URL = "https://hidenorioka.github.io";
const BASE_NAME = "/site";

export default defineConfig({
  site: SITE_URL,
  base: BASE_NAME,
  integrations: [
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
