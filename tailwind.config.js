/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        b2b: {
          bg: "#F3F2EA",
          surface: "#FAFAFA",
          surface2: "#E9E8E0",
          ink: "#131311",
          ink2: "#2A2A27",
          muted: "#6D6D68",
          muted2: "#B9B9B7",
          lime: "#C6FD50",
          limeSoft: "#DDFF86",
        },
      },
    },
  },
  plugins: [],
}
