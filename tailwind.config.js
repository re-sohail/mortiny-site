/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
    extend: {
      screens: {
        'mo': '300px',
        // => @media (min-width: 300px) { ... }
      },
      
    },
    borderWidth: {
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '6': '6px',
      '9': '9px',
      '12': '12px',
    },
  },
  plugins: [],
}


