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
        'background-beach': 'url(\'public/img/background-beach.webp\')',
        'custom-gradient':
          'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #000 100%)',
      },
      fontFamily: {
        sans: ['"Times New Roman"', ...defaultTheme.fontFamily.sans],
        inconsolata: ['Inconsolata', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0%)', opacity: 1 },
        },
        slideRight: {
          '0%': { transform: '-translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0%)', opacity: 1 },
        },
        slideBottom: {
          '0%': { transform: '-translateY(50%)', opacity: 0 },
          '100%': { transform: 'translateY(0%)', opacity: 1 },
        },
      },
      animation: {
        slideLeft: 'slideLeft 1s ease-in-out forwards',
        slideRight: 'slideRight 1s ease-in-out forwards',
        slideBottom: 'slideBottom 1s ease-in-out forwards',
      },
      colors: {
        softSand: '#F9D6BB',
        sand: '#FFB36E',
        burnedSand: '#FF4D00',
        moon: '#5F5F5F',
        green: '#00FF51',
        darkGreen: '#81B928',
      },
    },
  },
  plugins: [],
}
