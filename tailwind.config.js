/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f5f3f3",
      },
    },
  },
  screens: {
    phone: { min: "100px", max: "400px" },
    llg: "1350px",
  },
  plugins: [require("@tailwindcss/typography")],
};
