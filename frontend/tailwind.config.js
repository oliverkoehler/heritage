/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#CDBD9B',
        'secondary': "#EDDDBC ",
        "brown": {
          DEFAULT: "#6A1C18",
          light: "#A60701",
          medium: "#7C4027",
          veryLight: "#DDCCA5"
        }
      }
    },
  },
  plugins: [],
}
