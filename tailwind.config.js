module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        default: ['"M PLUS Rounded 1c"', 'sans-serif']
      },
      colors: {
        'natural-white': '#faf8f7',
        'natural-black': '#1c1c1c',
        'natural-gray': '#464646',
        'blue-gray': '#ebeff2',
        arrow2nd: '#5B94FF'
      },
      letterSpacing: {
        super: '.25rem'
      }
    }
  },
  plugins: []
}
