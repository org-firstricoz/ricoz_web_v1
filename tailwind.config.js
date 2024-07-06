/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "rz-lategray": "#1B3228",
        "rz-darkgreen": "rgba(2, 67, 0, 0.53)",
        "rz-royalblue": "#007aff",
        "rz-lightblue": "#F9FAFF",
        "rz-lightgray": "#888888",
        "rz-darkgray": "#4D4E54",
      },
      screens: {
        xs: "380px",
      },
      boxShadow:{
        "R1":"rgba(0, 0, 0, 0.1) 0px 4px 12px"
      }
    },
  },
  
  plugins: [],
};
