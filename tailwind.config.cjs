const colors = require('tailwindcss/colors');

const config = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      backgroundImage: {
        circuit: "url('/circuit-board.svg')",
        topography: "url('/topography.svg')",
      },
      boxShadow: {
        dark: '0 0 10px rgba(0, 0, 0, 1)',
      },
    },
    colors: {
      transparent: 'transparent',
      gray: colors.gray,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      blue: colors.blue,
      sky: colors.sky,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      black: '#0E0E0E',
      white: '#FFFFFF',
    },
  },

  plugins: [],
};

module.exports = config;
