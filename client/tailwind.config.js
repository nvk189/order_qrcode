/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from "tailwind-scrollbar";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "rgba(2, 8, 23, 1)",
        "color-text": "rgba(148, 163, 184, 1)",
        "color-hover": "rgba(248 , 250 , 252 ,1)",
      },
    },
  },
  plugins: [tailwindScrollbar],
};
