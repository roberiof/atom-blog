/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": '#290742', 
        "primaryDarker": '#170027', 
        "secondary": "#9E6DC2",
        "tertiary": "#4FFF4B",
        "outBodyColor": '#394FEF', 
      }
    },
  },
  plugins: [],
}

