/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple-1": "#F6F6FF",
        "purple-2": "#7874F7",
        "purple-3": "#6661F0",
        "purple-5": "#4F4AD1",

        "gray-1": "#A4A3B5",

        "yellow": "#F6DF11",
        "red": "#ED3929",
      }
    },
  },
  plugins: [],
}