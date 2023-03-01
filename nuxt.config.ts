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
          Roboto: true,
          "Josefin+Sans": true,
          Lato: [400, 700],
          "Tilt+Neon": true,
          Raleway: {
            wght: [100, 400],
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
});
