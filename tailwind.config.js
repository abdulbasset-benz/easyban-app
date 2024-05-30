/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors : {
      'darkblue' : 'hsl(233, 26%, 24%)', 
      'limegreen' : 'hsl(136, 65%, 51%)', 
      'brightcyan' : 'hsl(192, 70%, 51%)', 
    },
    secondaryColors : {
      'GrayBlue' : 'hsl(233, 8%, 62%)',
      'LightGrayBlue' : 'hsl(220, 16%, 96%)',
      'LightGray' : 'hsl(0, 0%, 98%)',
      'White' : 'hsl(0, 0%, 100%)',
    },
    fontFamily : {
      publicSans : ['Public Sans']
    },
    extend: {},
  },
  plugins: [],
}