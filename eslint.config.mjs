import js from "@eslint/js";
import tseslint from "typescript-eslint";
import astroPlugin from "eslint-plugin-astro";
import prettierConfig from "eslint-config-prettier";

/** @type {import("eslint").ESLint.ConfigData} */
const config = [
  {
    name: "eslint/recommended",
    rules: js.configs.recommended.rules,
  },
  ...tseslint.configs.recommended,
  ...astroPlugin.configs.recommended,
  {
    name: "prettier/config",
    ...prettierConfig,
  },
  {
    name: "ignores",
    ignores: [".astro", "node_modules", "dist"],
  },
];

export default config;
