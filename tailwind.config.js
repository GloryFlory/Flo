/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#1e6f78',
        accent: '#f1b139', 
        ink: '#0e1111',
        sand: '#f7faf9',
      },
    },
  },
  plugins: [],
}
