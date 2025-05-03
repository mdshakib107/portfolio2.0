import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#72E2AE",
      },
      keyframes: {
        ledgerleftright: {
          "0%, 100%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(100%)" },
        },
        ledgerrightleft: {
          "0%, 100%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(-100%)" },
        },
        ledgerbottomtop: {
          "0%, 100%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(-100%)" },
        },
        ledgertopbottom: {
          "0%, 100%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        ledgerleftright: "ledgerleftright 2s linear infinite",
        ledgerrightleft: "ledgerrightleft 2s linear infinite",
        ledgerbottomtop: "ledgerbottomtop 2s linear infinite",
        ledgertopbottom: "ledgertopbottom 2s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
