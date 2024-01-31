/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: 
      {fontFamily: {
      Caprasimo: ['Caprasimo', "cursive"],
      QuickSand: ['Quicksand', "sans-serif"],
      Teko : ["Teko', sans-serif"],
      Cinzel: ["Cinzel, serif"],
      Italliano: ["Italianno, cursive"],
      Rubik: ["Rubik Doodle Triangles, system-ui"],
      Zeyada: ['Zeyada, cursive']
    }
  },
  },
  plugins: [],
}