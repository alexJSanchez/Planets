/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			backgroundImage: {
				backgroundstars: "url('/src/assets/planet-mars.svg')",
			},
		},
	},
	plugins: [],
};
