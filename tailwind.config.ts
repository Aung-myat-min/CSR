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
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
