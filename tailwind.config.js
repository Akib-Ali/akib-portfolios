// // tailwind.config.js
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,ts,jsx,tsx}", // aapke src folder ke files
//     "./app/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       keyframes: {
//         wiggle: {
//           '0%, 100%': { transform: 'rotate(-5deg)' },
//           '50%': { transform: 'rotate(5deg)' },
//         },
//         'spin-slow': {
//           from: { transform: 'rotate(0deg)' },
//           to: { transform: 'rotate(360deg)' },
//         },
//       },
//       animation: {
//         wiggle: 'wiggle 2s ease-in-out infinite',
//         'spin-slow': 'spin-slow 8s linear infinite',
//       },
//     },
//   },
//   plugins: [],
// };

// const lightswind = require("lightswind/plugin");

// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx}",
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "node_modules/lightswind/**/*.{js,ts,jsx,tsx}"
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     lightswind,
//   ],
// };




const lightswind = require("lightswind/plugin");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/lightswind/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Aapki brand theme colors ko yahan define kar diya hai
        primaryBlue: "#2D4E9D",
        secondaryBlue: "#4F6FB3",
        brandGreen: "#8CC63F",
      },
      // keyframes: {
      //   float: {
      //     '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
      //     '50%': { transform: 'translateY(-20px) rotate(2deg)' },
      //   }
      // },
      // animation: {
      //   // 'animate-float' ab poore project mein available hoga
      //   float: 'float 6s ease-in-out infinite',
      // },
      // extend ke andar ye add karein
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