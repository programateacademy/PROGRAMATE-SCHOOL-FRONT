/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        'yellow': '#FBC209',
        'red': '#D22A49',
        'purple': '#8C33FF',
        'dark': '#262425',
        'light': '#FFFFFF'
      },
      fontFamily: {
        Poppins: ['Poppins'],
        Nunito: ['Nunito']
      },
    },
  },
  plugins: [],
}
