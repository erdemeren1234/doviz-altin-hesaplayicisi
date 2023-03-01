/** @type {import('tailwindcss').Config} */
const formKitTailwind = require("@formkit/themes/tailwindcss");

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        "body-light-bg": "#ECE5C7",
        "section-light-bg": "#C2DED1",
      },
      
    },
  },
  plugins: [formKitTailwind],
};
