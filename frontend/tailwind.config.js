/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Blog_app/**/*.{html,js,ts,jsx,tsx}", "./login_page.js", "./App.js"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        custom1: ["Caramel", "cursive"],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
