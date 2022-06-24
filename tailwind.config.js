module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  safelist: [
    {
      pattern: /./,
    },
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        sm: '576px',
      },
      colors: {
        light: {
          primary: '#FBFCFF',
          secondary: '#6772E5',
          background: '#f5f5f5',
          text: '#333',
        },
        dark: {
          primary: '#1F2937',
          secondary: '#6772E5',
          background: '#111827',
          text: '#FBFCFF',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
    require('tailwind-scrollbar'),
    require('daisyui'),
  ],
};
