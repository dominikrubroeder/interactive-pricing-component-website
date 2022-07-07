/** @type {import('tailwindcss').Config} */

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
    },
  },
  plugins: [],
};
