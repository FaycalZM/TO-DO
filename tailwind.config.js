/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bright-blue': 'hsl(220, 98%, 61%)',
        'check-background-from': 'hsl(192, 100%, 67%)',
        'check-background-to': 'hsl(280, 87%, 65%)',
        'very-light-gray': 'hsl(0, 0%, 98%)',
        'very-light-grayish-blue': 'hsl(236, 33%, 92%)',
        'light-grayish-blue-light': 'hsl(233, 11%, 84%)',
        'dark-grayish-blue-light': 'hsl(236, 9%, 61%)',
        'very-dark-grayish-blue-light': 'hsl(235, 19%, 35%)',
        'very-dark-blue': 'hsl(235, 21%, 11%)',
        'very-dark-desaturated-blue': 'hsl(235, 24%, 19%)',
        'light-grayish-blue-dark': 'hsl(234, 39%, 85%)',
        'light-grayish-blue-dark-hover': 'hsl(236, 33%, 92%)',
        'dark-grayish-blue-dark': 'hsl(234, 11%, 52%)',
        'very-dark-grayish-blue-dark-1': 'hsl(233, 14%, 35%)',
        'very-dark-grayish-blue-dark-2': 'hsl(237, 14%, 26%)'
      },
      fontFamily: {
        'Josefin-sans': ['Josefin Sans', 'sans-serif'],
      },
      screens: {
        'desktop': '1280px',
        'tablet': '768px'
      }
    },
  },
  plugins: [],
}

