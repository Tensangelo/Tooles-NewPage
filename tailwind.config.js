const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '30px 20px 5px rgba(228,230,238,1)',
        '4xl': '0px 15px 20px rgba(110,110,110,1)',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      'blue': {
        900: '#2b3c71',
        910: '#30468a',
        950: '#1d2f68',
        1000: '#0f1c46',
      },
      'blueGray': {
        50: '#f9fcff'
      },
      'violet': {
        900: '#460082',
      },
      'purple': {
        900: '#b13de9',
      },
      'greenBlue': {
        700: '#87fdde',
        900: '#5feec8',
      }
    },
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif']
    },
    backgroundImage: {
      'card1': 'url(https://tooles.co/wp-content/uploads/2022/08/img-header.png)',
      'card2': 'url(https://tooles.co/wp-content/uploads/2022/10/img-header.png)',
      'magdalena': 'url(https://infotephvg.edu.co/cienaga/hermesoft/portalIG/home_1/recursos/mayo2019/03052019/infotep-aerea-19.jpg)',
      'cartagena': 'url(https://bolivarense.com/wp-content/uploads/2019/09/cartagena-4138418_1920-1280x640.jpg)',
      'salento': 'url(https://www.triviantes.com/wp-content/uploads/2022/12/top-3-mejores-planes-en-Salento-2.jpg)',
    }
  },
  plugins: [],
}