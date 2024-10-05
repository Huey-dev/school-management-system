import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        sky: "#C3EBFA",
        skylight: "#EDF9FD",
        purple: "#CFCEFF",
        purplelight: "#F1F0FF",
        yellow: "#FAE27C",
        yellowlight: "FEFCE8"
      }
    },
  },
  plugins: [],
};
export default config;
