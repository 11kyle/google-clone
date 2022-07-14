/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-grey': '#f2f2f2',
        'custom-slate': '#f8f9fa',
        'custom-slate-2': '#70757a',
      },
      width: {
        '582': '582px',
      },
    },
  },
  plugins: [],
}
