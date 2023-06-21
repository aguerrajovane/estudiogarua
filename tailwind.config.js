/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    safelist: [
      'animate-[fade-in_1s_ease-in-out]', 
      'animate-[fade-in-down_1s_ease-in-out]',
      'animate-[slide-right_1s_ease-in-out]',
      'animate-[slide-in-down_1s_ease-in-out]'
    ],
    colors: {
      'white': '#f5f5f7',
      'black': '#1d1d1f',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}

