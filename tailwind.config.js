/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8B4513",
        black: "#3E3E3E",
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg,#8B4513, #A0522D, #D2B48C, #F4A460)",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
