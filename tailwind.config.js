module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        default: ['"M PLUS Rounded 1c"', 'sans-serif']
      },
      colors: {
        'natural-white': '#faf8f7',
        'natural-black': '#1c1c1c',
        'natural-gray': '#464646',
        arrow2nd: '#5B94FF'
      },
      letterSpacing: {
        super: '.25rem'
      }
    }
  },
  variants: {
    extend: {
      brightness: ['hover']
    }
  },
  plugins: []
}
