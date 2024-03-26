/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'praimary': '#23BE0A',
      'second': '#59C6D2',
      'black' : '#131313',
      'white' : '#FFFFFF',

    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

