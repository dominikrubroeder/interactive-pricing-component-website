/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'app-primary-cyan-soft': 'hsl(174, 77%, 80%)',
        'app-primary-cyan-strong': 'hsl(174, 86%, 45%)',
        'app-primary-red-grayish-light': 'hsl(14, 92%, 95%)',
        'app-primary-red-light': 'hsl(15, 100%, 70%)',
        'app-primary-blue-pale': 'hsl(226, 100%, 87%)',
        'app-neutral-blue-pale-very': 'hsl(230, 100%, 99%)',
        'app-neutral-blue-grayish-light': 'hsl(224, 65%, 95%)',
        'app-neutral-blue-grayish-light-2': 'hsl(223, 50%, 87%)',
        'app-neutral-blue-grayish': 'hsl(225, 20%, 60%)',
        'app-neutral-blue-desaturated-dark': 'hsl(227, 35%, 25%)',
      },
      backgroundImage: {
        'bg-pattern': "url('/images/bg-pattern.svg')",
      },
      animation: {
        fadeUp: 'fadeUp .6s ease-out forwards',
        fadeDown: 'fadeDown .6s ease-out forwards',
        fadeToRight: 'fadeToRight .6s ease-out forwards',
        fadeToLeft: 'fadeToLeft .6s ease-out forwards',
        scale: 'scale .6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': {
            transform: 'translateY(60%)',
            opacity: '0%',
            visibility: 'hidden',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '100%',
            visibility: 'visible',
          },
        },
        fadeDown: {
          '0%': {
            transform: 'translateY(-60%)',
            opacity: '0%',
            visibility: 'hidden',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '100%',
            visibility: 'visible',
          },
        },
        fadeToRight: {
          '0%': {
            transform: 'translateX(-30%)',
            opacity: '0%',
            visibility: 'hidden',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '100%',
            visibility: 'visible',
          },
        },
        fadeToLeft: {
          '0%': {
            transform: 'translateX(30%)',
            opacity: '0%',
            visibility: 'hidden',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '100%',
            visibility: 'visible',
          },
        },
        scale: {
          '0%': {
            transform: 'scale(0.7)',
            opacity: '0%',
            visibility: 'hidden',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '100%',
            visibility: 'visible',
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.animation-delay-1000': {
          'animation-delay': '1s',
        },
      });
    }),
  ],
};
