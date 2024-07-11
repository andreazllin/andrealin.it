import type { Config } from "tailwindcss"
import twTypography from "@tailwindcss/typography"

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      transitionDuration: {
        50: "50ms"
      },
      fontFamily:{
        stray: ["Stray", "sans-serif"],
        minecraftEnchantment: ["MinecraftEnchantment", "sans-serif"],
        drukWideBold: ["DrukWideBold", "sans-serif"]
      },
      colors: {
        slate: {
          900: "#121417",
          800: "#1B1F23",
          700: "#262A30",
          600: "#454C56",
          500: "#555D67",
          400: "#777F89",
          300: "#A2AAB4",
          200: "#DFE5E9",
          100: "#E8EDF0",
          50: "#F5F7F8"
        },
        purple: {
          900: "#43248E",
          800: "#5129AE",
          700: "#6132CF",
          600: "#6A3CE2",
          500: "#8164EE",
          400: "#A191F4",
          300: "#C0B9F9",
          200: "#DBD8FC",
          100: "#ECEAFD",
          50: "#F4F4FE"
        },
        red: {
          900: "#381E1D",
          800: "#60211F",
          700: "#A53E3E",
          600: "#D24242",
          500: "#E85757",
          400: "#F87171",
          300: "#FCA5A5",
          200: "#FECACA",
          100: "#FEE2E2",
          50: "#FEF2F2"
        },
        orange: {
          900: "#35241E",
          800: "#753621",
          700: "#BC542A",
          600: "#E16727",
          500: "#F17C2A",
          400: "#F69546",
          300: "#FCB871",
          200: "#FED7AA",
          100: "#F9ECDB",
          50: "#FFF7ED"
        },
        green: {
          900: "#143120",
          800: "#166534",
          700: "#15803D",
          600: "#239F51",
          500: "#35C068",
          400: "#66DB91",
          300: "#8CEDAF",
          200: "#BBF7D0",
          100: "#E3F5E9",
          50: "#F0FDF4"
        },
        pink: {
          900: "#701338",
          800: "#9D174D",
          700: "#BE185D",
          600: "#DB2777",
          500: "#EC4899",
          400: "#F472B6",
          300: "#F9A8D4",
          200: "#FBCFE8",
          100: "#FCE7F3",
          50: "#FDF2F8"
        },
        blue: {
          900: "#1E3A8A",
          800: "#1E40AF",
          700: "#1D4ED8",
          600: "#2563EB",
          500: "#3B82F6",
          400: "#60A5FA",
          300: "#93C5FD",
          200: "#BFDBFE",
          100: "#DBEAFE",
          50: "#EFF6FF"
        },
        cyan: {
          900: "#164E63",
          800: "#155E75",
          700: "#0E7490",
          600: "#0891B2",
          500: "#06B6D4",
          400: "#22D3EE",
          300: "#67E8F9",
          200: "#A5F3FC",
          100: "#D4F6F9",
          50: "#EEF7F8"
        }
      }
    }
  },
  plugins: [
    twTypography
  ]
}
export default config
