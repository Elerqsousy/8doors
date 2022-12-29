/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo , sans-serif'],
      },
    },
    colors: {
      primary: '#01d8da;',
      gray: {
        lighter: '#f4f6f9',
        light: '#9A9A9A',
        mid: '#888',
        dark: '#757575',
        darker: '#455a64'
      },
      black: {
        light: '#424242',
        mid: '#2c2c2c',
        dark: '#212529',
      }
    },
  },
  plugins: [],
};
