module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        main: "#434343",
        background: "#FBFBFB",
        black: "#1C1C1C",
        sea: "#45A3CC"
      },
      letterSpacing: {
        0.2: ".2rem",
        0.4: ".4rem"
      }
    }
  },
  plugins: []
};
