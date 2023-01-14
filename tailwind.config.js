/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      orange: "#F79F1F",
      primary: "#eee",
      secondary: "#fff",
      primary_dark: "#222",
      secondary_dark: "#333",
    },
  },
  plugins: [],
};
