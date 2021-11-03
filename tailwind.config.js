module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
       'base': '1rem',
       'lg': '1.125rem',
       'xl': '1.25rem',
       '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
       '5xl': '3rem',
       '6xl': '4rem',
      '7xl': '5rem',
     },
     
    extend: {
      colors: {
        'black': {
          DEFAULT: '#0c1825',
          '50': '#f3f3f4', 
          '100': '#e7e8e9', 
          '200': '#c2c5c9', 
          '300': '#9ea3a8', 
          '400': '#555d66', 
          '500': '#0c1825', 
          '600': '#0b1621', 
          '700': '#09121c', 
          '800': '#070e16', 
          '900': '#060c12'
      }
     },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
