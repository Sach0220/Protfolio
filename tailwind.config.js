module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('public/images/hero-bg.jpg')",
      },
      colors: {
        'primary': '#1F2937',
        'secondary': '#3B82F6',
      },
    },
  },
  plugins: [],
};
