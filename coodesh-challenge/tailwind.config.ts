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
    keyframes: {
      fadeOutDisplay: {
        '0%': { opacity:"0" },
        '100%': { opacity:"1" },
      },
      fadeOutImage: {
        '0%': { opacity:"1", backgroundColor:"#88aafe", filter: "blur(0px)"},
        '20%': { opacity:"1", backgroundColor:"#88aafe" ,filter: "blur(4px)"},
        '60%': { opacity:"0", backgroundColor:"transparent" },
      }
    },
    animation: {
      fadeoutDisplayRadios: 'fadeOutDisplay 1s ease-in-out',
      fadeoutImage: 'fadeOutImage 2s ease-in-out'
    },
  },
  plugins: [],
};
export default config;
