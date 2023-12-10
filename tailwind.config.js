/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "sofia-pro": ["Sofia Pro", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
