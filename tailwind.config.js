const plugin = require('tailwindcss/plugin')

const addVariant = plugin(({ addVariant, e }) => {
  addVariant('where', ':where(&)')
})

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui'), addVariant],
  daisyui: {
    theme: ['wireframe']
  }
}
