/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "mytheme",
      {
        mytheme: {
          primary: "#006aad",

          secondary: "#35a9ef",

          accent: "#fb6b31",

          neutral: "#fff",

          "base-100": "#345da7",

          info: "#06b6d4",

          success: "#00ff00",

          warning: "#fb6b31",

          error: "#ff0000",
        },
      },
      "dark",
      "light",
      "retro",
      "cyberpunk",
      "valentine",
      "aqua",
    ],
  },
};
