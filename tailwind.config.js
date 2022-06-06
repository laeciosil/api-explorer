module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#FBFCFF',
          secondary: '#5965E0',
          background: '#f5f5f5',
          text: '#333',
        },
        dark: {
          primary: '#242526',
          secondary: '#5965E0',
          background: '#18191B',
          text: '#FBFCFF',
        }
      }
    },
  },
  plugins: [],
}
