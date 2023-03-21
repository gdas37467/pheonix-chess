/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {},
    backgroundPosition: {
      bottom: 'bottom',
      'bottom-4': 'center bottom 1rem',
      
      center: 'center',
      'center-4' : 'center 1rem',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-bottom-1' :'right bottom 0.5rem',
      'right-top': 'right top',
      top: 'top',
      'top-4': 'center top 1rem',
    },
    fontFamily :{
      opsans : ['Open Sans'],
      russone : ['Russo One'],
      georgia : ['EB Garamond']
    } 
  },
  plugins: []
}