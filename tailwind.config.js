/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-dark": "var(--text-dark)",
        "main-gold": "var(--text-gold)",
        "main-gray": "var(--text-gray)",
        "second-gray": "var(--text-gray2)",
        "main-light": "var(--text-light)"
      },
      fontFamily: {
        nephilm: ['nephilm', 'sans-serif'],
      },
    },
  },
  plugins: [],
}