import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#0B7373",
        secondary: "#004040",
        gold: "#D6B66B",
        white: "#FFFFFF",
        black: "#000000",
      },
      screens: {
        desktop: "1096px",
      },
      fontFamily: {
        albertSans: ["var(--font-albert-sans)", "sans-serif"],
        unbounded: ["var(--font-unbounded)", "sans-serif"],
        theSignature: ["TheSignature", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
