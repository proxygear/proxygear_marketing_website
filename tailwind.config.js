/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./source/**/*.{html,erb}"
  ],
  theme: {
    extend: {
      // spacing: {
      //   '12': '32rem',
      // }
          // https://uicolors.app/create,
      colors: {
        white: "#ffffff",
        'eminence': {
          '50': '#faf6fe',
          '100': '#f4eafd',
          '200': '#ead9fb',
          '300': '#dbbbf7',
          '400': '#c48ff1',
          '500': '#ae64e8',
          '600': '#9944d9',
          '700': '#8332be',
          '800': '#6f2e9b',
          '900': '#5f2883',
          '950': '#3d105b',
        },
        //light_purple: "#745D9B",
        'deluge': {
          '50': '#f8f7fb',
          '100': '#f1f0f7',
          '200': '#e5e3f1',
          '300': '#d1cce6',
          '400': '#b8afd6',
          '500': '#9d8dc5',
          '600': '#8a74b3',
          '700': '#745d9b', // <-
          '800': '#655186',
          '900': '#53446e',
          '950': '#352b4a',
        },
        //acid_green: "#BFFF00",
        'lime': {
          '50': '#fbffe4',
          '100': '#f6ffc4',
          '200': '#ebff90',
          '300': '#d9ff50',
          '400': '#bfff00', // <-
          '500': '#a6e600',
          '600': '#80b800',
          '700': '#618b00',
          '800': '#4d6d07',
          '900': '#415c0b',
          '950': '#213400',
        },
        //dark_orange: "#C74400",
        'tia-maria': {
          '50': '#fff8ec',
          '100': '#ffefd2',
          '200': '#ffdca4',
          '300': '#ffc16b',
          '400': '#ff9c2f',
          '500': '#ff7d07',
          '600': '#f96000',
          '700': '#c74400', // <-
          '800': '#a33809',
          '900': '#83300b',
          '950': '#471503',
        },
      },
    },
    fontFamily: {
      'title': ['Rokkitt', 'Rockwell'],
      'body': ['Roboto'],
    },
  },
  plugins: [],
}

