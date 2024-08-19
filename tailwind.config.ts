import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        main: "#015486",
        background: "#FFFFFF",
        content: "#000000",
        primary: "#E5E5E5",
        secondary: "#121212",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        slide: {
          "0%, 20%": { transform: "translateX(0)" },
          "25%, 50%": { transform: "translateX(-100%)" },
          "60%, 90%": { transform: "translateX(-200%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        slide: "slide 20s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
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
} satisfies Config

export default config