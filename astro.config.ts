import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const SITE_URL = "https://hidenorioka.github.io";
const BASE_NAME = "/site";

export default defineConfig({
  site: SITE_URL,
  base: BASE_NAME,
  vite: {
    plugins: [tailwindcss()],
  },
});
