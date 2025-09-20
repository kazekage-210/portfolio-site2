import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0d0d0d",
        foreground: "#f5f5f5",
        muted: "#a1a1aa",
        accent: "#3b82f6",
      },
      fontFamily: {
        sans: ["Noto Sans JP", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

