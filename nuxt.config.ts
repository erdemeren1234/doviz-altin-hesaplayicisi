// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@formkit/nuxt",
    "@nuxt/content",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Oswald: true,
          Quicksand: true,
          "Josefin+Sans": true,
          Lobster: true,
          Lato: [400, 700],
          "Tilt+Neon": true,
          "Itim": true,
          Raleway: {
            wght: [100, 400, 800],
            ital: [100],
          },
        },
      },
    ],
  ],

  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  imports: {
    dirs: [
      // ... or scan all modules within given directory
      "composables/**",
    ],
  },
  pinia: {
    autoImports: ["defineStore", "storeToRefs"],
  },
});
