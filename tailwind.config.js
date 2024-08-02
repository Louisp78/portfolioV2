const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Times New Roman"', ...defaultTheme.fontFamily.sans],
        inconsolata: ["Inconsolata", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      sand: '#F9D6BA',
      burnedSand: '#FF4D00',
      moon: '#5F5F5F',
    },
  },
  plugins: [],
}
