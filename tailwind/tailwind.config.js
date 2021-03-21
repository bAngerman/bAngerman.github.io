module.exports = {
  purge: {
    enabled: true,
    content: [
      './_layouts/**/*.html',
      './_includes/**/*.html',
      './_posts/**/*.md',
      './_projects/**/*.md',
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
