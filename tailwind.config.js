/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FD7456',
        secondary: {
          100: '#DFDFDF',
          200: '#A3E122',
        },
        tertiary: '#95AD63',
      },
    },
  },
  variants: {
    extend: {
      textColor: ['focus'],
    },
  },
  plugins: [],
}

