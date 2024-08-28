/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "bg-image-light":"url(./background-light.png)",
        "bg-image-dark":"url(./background-dark.png)",
      },
      minHeight:{
        "calc-content": "calc(100vh - 80px)",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

