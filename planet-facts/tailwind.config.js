/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      mysteriousDepth: "#070724",
      carbonBlue: "#38384F",
      formalAffair: "#838391",
      mercury: "#419EBB",
      venus: "#EDA249",
      earth: "#6D2ED5",
      mars: "#D14C32",
      jupiter: "#D83A34",
      saturn: "#CD5120",
      uranus: "#1EC1A2",
      neptune: "#2D68F0",
      hokkaidoLavender: "#6f2ed6",
    },
    fontFamily: {
      antonio: "Antonio",
      leagueSpartan: "League Spartan",
    },
    extend: {
      backgroundImage: {
        backgroundStars: "url('/src/assets/planet-mars.svg')",
      },
      screens: {
        tablet: "48rem",
        desktop: "90rem",
      },
    },
  },
  plugins: [],
};
