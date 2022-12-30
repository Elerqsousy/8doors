/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo , sans-serif'],
      },
      boxShadow: {
        'norm': '0 3px 8px 0 rgba(0,0,0,0.17)',
        'side': '1px 0px 20px rgba(0,0,0,0.08)',
        'nav': '0px 0px 20px 0px rgba(0,0,0,0.15) !important',

      },
      colors: {
        primary: '#01d8da;',
        'gray': {
          lighter: '#f4f6f9',
          light: '#9e9e9e',
          mid: '#888',
          dark: '#757575',
          darker: '#455a64',
        },
        black: {
          light: '#424242',
          mid: '#2c2c2c',
          dark: '#212529',
        },
      },
    },
    screens: {
      'sm': {'min': '640px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
    },
  },
  plugins: [],
};
