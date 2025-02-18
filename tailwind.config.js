/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./public/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};