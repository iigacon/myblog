module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      inherit: 'inherit',
      none: 'none',
      '2': '2 2 0%',
      '3': '3 3 0%',
      '4': '4 4 0%',
      '5': '5 5 0%',
      '6': '6 6 0%',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
