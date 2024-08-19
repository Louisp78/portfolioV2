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
      backgroundImage: {
        'background-beach': 'url(\'public/img/background-beach.png\')',
        'custom-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #000 100%)',
      },
      fontFamily: {
        sans: ['"Times New Roman"', ...defaultTheme.fontFamily.sans],
        inconsolata: ['Inconsolata', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      softSand: '#F9D6BB',
      sand: '#FFB36E',
      burnedSand: '#FF4D00',
      moon: '#5F5F5F',
      white: '#FFFFFF',
      black: '#000000',
    },
  },
  plugins: [],
}
