/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", 'index.html', "_index.php", "index.php"],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      poppins: "Poppins",
    },
    extend: {
      colors: {
        'primary': '#558bff',
        'primary-hover': '#5c89e8',
      }
    },
  },
  plugins: [],
}