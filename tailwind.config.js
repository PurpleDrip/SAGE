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
          "primary-content": "#d1e1f0",
          secondary: "#35a9ef",
          "secondary-content": "#010a14",
          accent: "#fb6b31",
          "accent-content": "#150401",
          neutral: "#fff",
          "neutral-content": "#161616",
          "base-100": "#345da7",
          "base-200": "#2c5091",
          "base-300": "#24437b",
          "base-content": "#d4deef",
          info: "#06b6d4",
          "info-content": "#000c10",
          success: "#00ff00",
          "success-content": "#001600",
          warning: "#fb6b31",
          "warning-content": "#150401",
          error: "#ff0000",
          "error-content": "#160000",
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
