/** @type {import('tailwindcss').Config} */

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
        //"section-light-bg": "#C5DED1",
      },
      backgroundImage: {
        "section-light-bg": "linear-gradient(116deg, rgba(111,124,59,0.1) 3%, rgba(31,102,18,0.1) 40%, rgba(173,192,118,0.1) 81%)",
        "header-bg": "linear-gradient(to left, #aabbaa80, #ffffabcc)",
      },
      screens: {
        '3xl': '1600px',
      },
      
    },
  },
  plugins: [],
};
