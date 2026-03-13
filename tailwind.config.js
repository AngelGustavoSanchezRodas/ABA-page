/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          turquoise: '#43b5a9',
          mustard: '#dfa135',
          magenta: '#ce4a7e',
          dark: '#3b3f46'
        }
      }
    },
  },
  plugins: [],
}
