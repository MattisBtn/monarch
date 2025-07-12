import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
    define: {
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
    },
  },

  vue: {
    compilerOptions: {
      // Configuration pour améliorer l'hydratation
      comments: false,
    },
  },

  ssr: true,

  app: {
    head: {
      // Améliorer l'hydratation
      viewport: "width=device-width, initial-scale=1",
    },
  },

  appConfig: {
    whatsapp: {
      number: "+33665759693",
    },
  },

  modules: [
    "@vueuse/nuxt",
    "@nuxt/fonts",
    "@nuxtjs/i18n",
    "@nuxt/image",
    "nuxt-mcp",
    "@nuxt/icon",
    "@nuxtjs/device",
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
