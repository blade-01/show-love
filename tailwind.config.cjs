/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#644AE2',
        priBg: '#F5E6FE',
        priText: '#2F2F2F',
      },
      fontFamily: {
        public: ['Public Sans', 'sans-serif']
      },
      fontSize: {
        nl: ['56px', '64px']
      },
      screens: {
        '2xs': '200px',
        '1xs': '350px',
        '1xl': '1400px',
        '3xl': '2000px'
      }
    }
  },
  plugins: []
}
