/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    ...(function () {
      try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const theme = require('./tailwind.theme.cjs')
        return theme
      } catch (e) {
        return { extend: {} }
      }
    })(),
  },
  plugins: [],
}
