/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#fdf8f0',
          100: '#f5e6d0',
          200: '#ecdaba',
          300: '#d4b896',
          400: '#c49a6c',
          500: '#b07d4a',
          600: '#96653a',
          700: '#7a4f2e',
          800: '#5c3a20',
          900: '#3e2715',
          950: '#2b1a0d',
        },
        cream: {
          50: '#fffdf7',
          100: '#fef7e8',
          200: '#fcedc7',
          300: '#f8dfa0',
          400: '#f0cc6e',
          500: '#e8b93c',
          600: '#d4a02a',
          700: '#b07d1f',
          800: '#8c6218',
          900: '#6b4c14',
        },
        amber: {
          50: '#fff8eb',
          100: '#ffefc6',
          200: '#ffdc88',
          300: '#ffc44a',
          400: '#ffad20',
          500: '#f98c07',
          600: '#dd6602',
          700: '#b74406',
          800: '#94340c',
          900: '#7a2b0d',
        },
      },
      fontFamily: {
        dancing: ['"Dancing Script"', 'cursive'],
        georgia: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [require("daisyui")],
};
