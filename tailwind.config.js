export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { ivory: '#FAF6EE', cream: '#F1E9D9', charcoal: '#231F1C', gold: { DEFAULT: '#B8975A', dark: '#8F713A' } },
      fontFamily: { serif: ['"Cormorant Garamond"', 'Georgia', 'serif'], sans: ['Inter', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
}
