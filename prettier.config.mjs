/** @type {import("prettier").Config} */
const config = {
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  plugins: [
    /** @see https://github.com/withastro/prettier-plugin-astro?tab=readme-ov-file#recommended-configuration */
    "prettier-plugin-astro",
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};

export default config;
