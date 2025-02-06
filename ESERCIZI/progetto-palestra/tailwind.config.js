/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fira: ['Fira Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      spacing: {
        '100': '24rem',
        '110': '28rem',
        '128': '30rem',
        '50vh': '50vh',
      },
    },
  },
  plugins: [],
}

