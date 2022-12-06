/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "500px",
      md: "768px",
      lg: "1025px",
      xl: "1140px",
    },

    extend: {
      fontFamily: {
        AllianceBold: ["'Alliance No.2 Bold'", "sans-serif"],
        AllianceRegular: ["'Alliance No.2 Regular'", "sans-serif"],
      },
      colors: {
        clrPrimary: "#162529",
        clrSky: "#0A84FF",
        clrSkyDark: "#0A84FF91",
        clrDarkGray: "#333",
        clrLightGray: "#f5f5f5",
        clrVeryLightGray: "#f2f2f7",
      },
    },
  },
  plugins: [require("daisyui")],
};
