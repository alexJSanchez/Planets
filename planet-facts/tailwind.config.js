/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		colors: {
			mysteriousDepth: "#070724",
			carbonBlue: "#38384F",
			formalAffair: "#838391",
			mercury: "#DEF4FC",
			venus: "#EDA249",
			earth: "#6D2ED5",
			mars: "#D14C32",
			jupiter: "#ECAD7A",
			saturn: "#FCCB6B",
			uranus: "#65F0D5",
			neptune: "#497EFA",
			hokkaidoLavender: "#6f2ed6",
			fairyTaleBlue: "#419EBB",
		},

		fontFamily: {
			antonio: "Antonio",
			leagueSpartan: "League Spartan",
		},
		extend: {
			backgroundImage: {
				backgroundStars: "url('/src/assets/background-stars.svg')",
			},
			screens: {
				tablet: "48rem",
				desktop: "90rem",
			},
			spacing: {
				buttonOneTop: "8px",
				buttonOneBottom: "7px",
				buttonOneRight: "161px",
				buttonOneLeft: "20px",
				buttonTwoRight: "87px",
			},
		},
	},
	plugins: [],
};
