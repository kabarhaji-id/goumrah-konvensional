import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/section/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        "custom-lg": "0px 4px 12px 0px rgba(0, 0, 0, 0.25)",
      },
      boxShadow: {
        "custom-sm":
          "0px 4px 8px 0px rgba(0, 0, 0, 0.06), 0px 0px 4px 0px rgba(0, 0, 0, 0.04)",
        "custom-md":
          "0px 6px 6px 0px rgba(138, 138, 138, 0.04), 0px 1px 3px 0px rgba(138, 138, 138, 0.05), 0px 13px 8px 0px rgba(138, 138, 138, 0.03), 0px 23px 9px 0px rgba(138, 138, 138, 0.01), 0px 36px 10px 0px rgba(138, 138, 138, 0)",
        "custom-lg":
          "0px 8px 32px 0px rgba(17, 17, 26, 0.05), 0px 4px 16px 0px rgba(17, 17, 26, 0.05)",
        "custom-xl":
          "0px -6px 6px 0px rgba(138, 138, 138, 0.04), 0px -1px 3px 0px rgba(138, 138, 138, 0.05), 0px -13px 8px 0px rgba(138, 138, 138, 0.03), 0px -23px 9px 0px rgba(138, 138, 138, 0.01), 0px -36px 10px 0px rgba(138, 138, 138, 0)",
      },
      colors: {
        background: "#F1FAFA",
        foreground: "#002626",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "#1B8386",
          foreground: "#002626",
          accent: "#DCF1F1",
          background: "#F1FAFA",
        },
        neutral: {
          foreground: "#232323",
        },
        secondary: {
          DEFAULT: "#90CFD0",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#DCF1F1",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "#DDDDDD",
        input: "hsl(var(--input))",
        ring: "#1B8386",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        status: {
          gold: "#F2AC30",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        hero: "url('/assets/image/hero-bg.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
