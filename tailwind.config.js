/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-navy-blue': '#0d0c22',
        'custom-navy-blue-hover': '#0d0c22bd',
      },
    },
  },
  plugins: [],
}

