/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['Nunito', 'sans-serif'],
      },
      colors: {
        ivory: '#f7f1e8',
        champagne: '#b8924b',
        sage: '#8a9c80',
      },
    },
  },
  plugins: [],
}

