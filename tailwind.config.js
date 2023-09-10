/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '3_9': '3fr 9fr'
      },
      animation: {
        hideBar: 'hideBar ease 1s'
      },
      keyframes: {
        hideBar: {
          '0%': {
            height: '0px'
          },
          '100%': {
            height: 'auto'
          }
        }
      }
    },
  },
  plugins: [],
}