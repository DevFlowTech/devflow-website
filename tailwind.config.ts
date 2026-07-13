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
        // Deep pure black / charcoal base
        "devflow-black": "#000000",
        "devflow-charcoal": "#121212",
        "devflow-dark": "#1A1A1A",
        "devflow-gray": {
          100: "#E5E5E5",
          200: "#B3B3B3",
          300: "#808080",
          400: "#4D4D4D",
          500: "#2D2D2D",
          600: "#1F1F1F",
          700: "#161616",
        },
        // Mapping green/blue colors to Electric Blue for styling compatibility
        "devflow-green": {
          DEFAULT: "#00F0FF",
          50: "#e5fdff",
          100: "#b3f9ff",
          200: "#80f5ff",
          300: "#4df1ff",
          400: "#1aedff",
          500: "#00F0FF",
          600: "#00c0cc",
          700: "#009099",
          800: "#006066",
          900: "#003033",
        },
        "devflow-blue": {
          DEFAULT: "#00F0FF",
          50: "#e5fdff",
          100: "#b3f9ff",
          200: "#80f5ff",
          300: "#4df1ff",
          400: "#1aedff",
          500: "#00F0FF",
          600: "#00c0cc",
          700: "#009099",
          800: "#006066",
          900: "#003033",
        },
        "devflow-gold": {
          DEFAULT: "#D4AF37",
          50: "#faf6e7",
          100: "#f3e7c3",
          200: "#edd89f",
          300: "#e6c97a",
          400: "#e0ba56",
          500: "#D4AF37",
          600: "#aa8c2c",
          700: "#806921",
          800: "#554616",
          900: "#2a230b",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-serif)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "display-xl": [
          "5rem",
          { lineHeight: "1", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        "display-lg": [
          "4rem",
          { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        "display-md": [
          "3rem",
          { lineHeight: "1.1", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        "display-sm": [
          "2.25rem",
          { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        "body-xl": ["1.25rem", { lineHeight: "1.6" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body-md": ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
      },
      animation: {
        "pulse-green": "pulseGreen 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite alternate",
        dash: "dash 15s linear infinite",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
      },
      keyframes: {
        pulseGreen: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(186, 230, 84, 0.2)" },
          "100%": {
            boxShadow:
              "0 0 20px rgba(186, 230, 84, 0.4), 0 0 40px rgba(186, 230, 84, 0.1)",
          },
        },
        dash: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
        "in-out-quart": "cubic-bezier(0.76, 0, 0.24, 1)",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "glow-green": "0 0 20px rgba(186, 230, 84, 0.3)",
        "glow-green-sm": "0 0 10px rgba(186, 230, 84, 0.2)",
        "glow-green-lg": "0 0 40px rgba(186, 230, 84, 0.4)",
        "inner-glow": "inset 0 0 20px rgba(186, 230, 84, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
