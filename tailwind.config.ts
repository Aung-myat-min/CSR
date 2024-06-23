import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#015486",
        background: "#FFFFFF",
        content: "#000000",
        primary: "#E5E5E5",
        secondary: "#121212",
      },
      keyframes: {
        slide: {
          "0%, 20%": { transform: "translateX(0)" },
          "25%, 45%": { transform: "translateX(-100%)" },
          "50%, 70%": { transform: "translateX(-200%)" },
        },
      },
      animation: {
        slide: "slide 12s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  darkMode: "class",
};
export default config;
