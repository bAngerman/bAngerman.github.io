module.exports = {
  purge: {
    enabled: true,
    content: [
      './_layouts/**/*.html',
      './_includes/**/*.html',
    ],
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
