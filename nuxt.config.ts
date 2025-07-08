import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: [
    "@vueuse/nuxt",
    "@nuxt/fonts",
    "@nuxtjs/i18n",
    "@nuxt/image",
    "nuxt-mcp",
    "@nuxt/icon",
  ],

  i18n: {
    defaultLocale: "fr",
    locales: [
      {
        code: "fr",
        name: "Français",
        file: "fr.json",
      },
      {
        code: "en",
        name: "English",
        file: "en.json",
      },
      {
        code: "es",
        name: "Español",
        file: "es.json",
      },
    ],
    langDir: "locales/",
    strategy: "prefix_except_default",
  },

  fonts: {
    families: [
      // Font principale pour les titres - élégance absolue
      {
        name: "Playfair Display",
        provider: "google",
        weights: [300, 400, 500, 600, 700],
      },
      // Font secondaire pour les textes - modernité premium
      { name: "Inter", provider: "google", weights: [300, 400, 500, 600] },
    ],
  },
});
