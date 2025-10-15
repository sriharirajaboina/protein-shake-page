/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.css" // include your CSS file
  ],
  theme: {
    extend: {
      colors: {
        'main-bg': '#232224',
        'dark-brown': '#523122',
        'mid-brown': '#a26833',
        'light-brown': '#e3a458',
        'red-brown': '#7f3b2d',
        'milk-yellow': '#e3d3bc',
        'milk': '#faeade',
        'black': '#222123',
        'white': '#ffffff',
        'yellow': '#a26833',      
        'yellow-milk': '#e3d3bc',
        'red': '#a02128'
      },
      fontFamily: {
        sans: ['Antonio', 'sans-serif'],
        paragraph: ['ProximaNova', 'sans-serif']
      },
      fontSize: {
        '8.5xl': '8.5rem',
        '6.5xl': '6.5rem',
        '5xl': '3.3rem'
      },
      height: {
        'dvh': '100dvh',
        '120dvh': '120dvh'
      },
      width: {
        'size-15vw': '15vw',
        'size-9vw': '9vw'
      }
    }
  },
  plugins: [],
}