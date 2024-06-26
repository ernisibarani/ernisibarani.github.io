/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        playball: ["Playball", "cursive"],
      },
      colors: {
        light: {
          default: "#ffffff",
          gray50: "#f9fafb",
          gray100: "#f3f4f6",
          gray200: "#e5e7eb",
          gray300: "#d1d5db",
          gray400: "#9ca3af",
          gray500: "#6b7280",
          gray600: "#4b5563",
          gray700: "#374151",
          gray800: "#1f2937",
          gray900: "#111827",
          gray950: "#030712",
        },

        dark: {
          default: "#030712",
          gray50: "#111827",
          gray100: "#1f2937",
          gray200: "#374151",
          gray300: "#4b5563",
          gray400: "#6b7280",
          gray500: "#9ca3af",
          gray600: "#d1d5db",
          gray700: "#e5e7eb",
          gray800: "#f3f4f6",
          gray900: "#f9fafb",
          gray950: "#ffffff",
        },

        pink: "#FF5876",
        hitam: "#25282B",
        biru: "#0a66c2",
      },
    },
  },
  plugins: [],
};
