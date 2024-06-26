import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "store-primary": "#1E1E1E",
        "store-secondary": "#F4EDE8",
        "store-orange": "#F59D1A",
        "store-bgDasboard": "#141414",
        "store-bgDasboard-Secondary": "#262626",
        "store-dashboard-btn": "#1AC821",
      },
      fontFamily: {
        draco: ['var(--font-draco)'],
        decking: ['var(--font-decking)'],
        galantic: ['var(--font-galantic)'],
        roboto: ['var(--font-roboto)'],
        raleway: ['var(--font-raleway)']
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
