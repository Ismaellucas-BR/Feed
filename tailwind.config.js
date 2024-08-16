/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        'gray-10':'#e1e1e6',
        'gray-30':'#c4c4cc',
        'gray-40':'#8d8d99',
        'gray-60':'#323238',
        'gray-70':'#29292e',
        'gray-80':'#282824',
        'gray-90':'#121214',
        'gray-110':'#88875f',
        'green-30':'#00B37E',
        'green-50':'#00875f',
        'red-50':'#f75a68',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

