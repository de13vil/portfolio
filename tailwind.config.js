/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a', // near-black / deep navy
        primary: '#ffffff', // white
        secondary: '#a3a3a3', // muted gray
        accent: '#00d2ff', // electric blue / cyan
        border: '#1f2937', // subtle blue-gray
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
