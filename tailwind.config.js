module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        default: ['"Zen Maru Gothic"', 'sans-serif']
      },
      colors: {
        main: '#434343',
        white: '#FBFBFB',
        black: '#1C1C1C',
        sea: '#45A3CC'
      },
      letterSpacing: {
        0.2: '.2rem',
        0.4: '.4rem'
      }
    }
  },
  plugins: []
}
