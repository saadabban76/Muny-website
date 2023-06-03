/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // #26B662
        // primary: "#4C9540",
        primarybg: "#111727",
        primarytxt: "#EEEEEE",
      },
      backgroundImage: {
        "hero-bg": "url('../public/images/herobg.jpg')",
        // "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
