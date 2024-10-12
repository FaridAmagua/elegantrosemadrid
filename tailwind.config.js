/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: ['20px', '30px'],
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif','Poppins'],  // Define la fuente aquí
      },
    },
  },
  plugins: [],
}
