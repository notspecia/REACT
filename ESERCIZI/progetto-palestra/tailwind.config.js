/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '100': '24rem',
        '110': '28rem',
        '128': '31rem',
        '50vh': '50vh',
      },
    },
  },
  plugins: [],
}

