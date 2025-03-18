/** @type {import('tailwindcss').Config} */
const {heroui} = require("@heroui/react");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors:{
        iconCustom:"#C93D2D",
        blueCustom: "#2F7F8B",
        whiteSmokeCustom: "#F5F7F8",
        blueSlateCustom: "#BFD7EA"
        
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

