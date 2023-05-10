/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      screens: {
        desktop: { min: '1401px' },
        laptop: { max: '1400px', min: '1150px' },
        tablet: { max: '1149px', min: '800px' },
        mobile: { max: '799px' }
      },
      colors: {
        'colorButtonHeader': "#dddddd"
      },
      top: {

      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

