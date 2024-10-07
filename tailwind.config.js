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
        corprimaria: "#5AB6C3",

        /* mais escura que a primária */
        corsecundaria: "#346d76",

        /* mais clara que a primária */
        corterciaria: "#305edf",
      },
    },
  },

  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none', /* Firefox */
        },
        '.no-scrollbar::-webkit-scrollbar': {
          'display': 'none', /* Chrome, Safari, Edge */
        },
      });
    }
  ],
  
}