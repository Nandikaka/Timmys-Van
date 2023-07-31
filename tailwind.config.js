/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#f5e236',
        'background': '#2e2e2e',
        'primary': '#e1e1e1',
        'secondary': '#e2e9e2',
        'accent': '#eb1e1e',
      }
    },
  },
  plugins: [],
}