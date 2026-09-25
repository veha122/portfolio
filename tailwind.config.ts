// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        khmer: ['"Khmer MN"', 'system-ui', 'sans-serif'],  // or your Khmer font
      },
    },
  },
  plugins: [],
}