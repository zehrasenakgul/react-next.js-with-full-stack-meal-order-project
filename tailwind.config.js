/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          xs: "375px",
          sm: "640px",
          md: "768px",
          lg: "960px",
          xl: "1140px",
          "2xl": "1320px",
        },
      },
      colors: {
        yellow: "#ffd40d",
        pink: "#f3274c",
        black: "#000000",
      },
      fontFamily: {
        fredoka: ["Fredoka", "sans-serif"],
        epilogue: ["Epilogue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
