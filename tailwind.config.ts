/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#1C2B3A', // Granat BDI
        },
        accent: {
          main: '#E07A5F', // Terakota
          hover: '#C46245', // Ciemna Terakota
        },
        neutral: {
          bg: '#F7F3E8', // Ciepły Piasek
        },
        secondary: {
          teal: '#2A9D8F', // Morski/Sage
        },
      },
      fontFamily: {
        heading: ["Roboto Slab", "serif"],
        body: ["Lato", "sans-serif"],
      },
      borderRadius: {
        button: "9999px", // Full Pill
        card: "1.5rem", // 24px
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(0, 0, 0, 0.1)", // Subtelne uniesienie
      },
    },
  },
  plugins: [],
}
export default config