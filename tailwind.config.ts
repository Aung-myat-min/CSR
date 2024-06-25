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
          "25%, 50%": { transform: "translateX(-100%)" },
          "60%, 90%": { transform: "translateX(-200%)" },
        },
      },
      animation: {
        slide: "slide 20s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    function ({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        ".mask-gradient": {
          "mask-image":
            "linear-gradient(to bottom, transparent 0%, transparent 10%, #000 25%, #000 100%)",
        },
      });
    },
  ],
  darkMode: "class",
};
export default config;
