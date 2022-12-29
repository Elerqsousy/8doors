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
        'nav': '0px 0px 20px 0px rgba(0,0,0,0.15)',
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
