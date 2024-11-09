/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#006AAD",

          secondary: "#35A9EF",

          accent: "#FB6B31",

          neutral: "#4b5563",

          "base-100": "#1f2937",

          info: "#f3f4f6",

          success: "#00ff00",

          warning: "#00ff00",

          error: "#f43f5e",
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
