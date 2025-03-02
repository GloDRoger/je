/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing: Object.fromEntries(
        Array.from({ length: 2000 }, (_, i) => [i + 1, `${i + 1}px`]),
      ),
      backgroundImage: {
        // 'hero-box': 'linear-gradient(135deg, #1F262C, #121418);',
      },
      boxShadow: {
        // 'green-dot': '0 0 12px 0 #32ffce;',
      },
    },
  },
  plugins: [],
}
