/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const lightswind = require("lightswind/plugin");

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/lightswind/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#2D4E9D",
        secondaryBlue: "#4F6FB3",
        brandGreen: "#8CC63F",
      },
      keyframes: {
        'line-grow': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        }
      },
      animation: {
        'line-grow': 'line-grow 0.4s ease-out forwards',
      }
    },
  },
  plugins: [
    lightswind,
  ],
};

export default config;