/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SkModernistRegular", "Roboto", "Helvetica", "Arial", "sans-serif"],
        mono: ["SkModernistMono", "monospace"],
        bold: ["SkModernistBold"],
        regular: ["MilliardBook"],
      }
    },
  },
  plugins: [],
}
