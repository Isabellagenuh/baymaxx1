/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'fundo':'#000718',
      'letra': '#fff',
      'letraCinza': 'rgba(255,255,255,0.5)',
      'caixa': '#000511',
      'vermelho': '#D4132B',
      'caixaTopicos': "#010D2C"
    },
    fontFamily: {
      'poppins':'"Poppins"',
      'montserrat': '"Montserrat'
    }
  },
  plugins: [],
}
