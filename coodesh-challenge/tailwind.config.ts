import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize:{
        'headerFontSize':"1.75rem",
        'basicFontSize':"1.5rem",
        'subtitleFontSize':"1rem"
      },
      lineHeight:{
        'headerLineHeight':"2.118rem",
        'basicLineHeight':"1.816rem",
        'subtitleLineHeight':"1.21rem"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "iconsColor": "#1267FC"
      },
    },
  },
  plugins: [],
};
export default config;
