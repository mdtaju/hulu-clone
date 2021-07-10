module.exports = {
  // mode: 'jit', // Just In Time
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      animation: ['group-hover'],
      transitionProperty: ['group-hover', 'focus'],
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
