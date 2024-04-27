/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    
    "!./src/canvas/**/*.{js,ts,jsx,tsx}", // Exclui todos os arquivos dentro de src/canvas

  ],

  theme: {
    extend: {},
  },

  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        /* cor principal do projeto */
        corprimaria: "#2A9D8F",

        /* mais escura que a primária */
        corsecundaria: "#264653",

        /* mais clara que a primária */
        corterciaria: "#305edf",
      },
    },
  },

  plugins: [],
}