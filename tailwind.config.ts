import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0D1A2E",
        shield: "#0D2A52",
        blue: "#1A5A99",
        gold: "#F0B429",
        muted: "#8899AA",
      },
      fontFamily: {
        display: ["var(--font-barlow-condensed)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
