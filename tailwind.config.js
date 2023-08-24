/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ['./**/*.{html,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins', 'sans-serif']
      },
      colors: {
        primary: '#6D95FC'
      },
      fontSize: {
        main: '1.3125rem'
      },
      height: {
        157: '39.25rem'
      },
      padding: {}
    }
  },
  plugins: []
}
