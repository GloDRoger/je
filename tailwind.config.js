/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: [],
      spacing: Object.fromEntries(
        Array.from({ length: 2000 }, (_, i) => [i + 1, `${i + 1}px`]),
      ),
      colors: {
        'prime': '#303030',
      },
      backgroundImage: {
        // 'hero-box': 'linear-gradient(135deg, #1F262C, #121418);',
      },
      boxShadow: {
        // 'green-dot': '0 0 12px 0 #32ffce;',
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}
