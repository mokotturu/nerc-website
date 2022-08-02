/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.{html,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				'umlblue': {
					500: '#3068D9',
					900: 'rgba(16, 37, 64)'
				},
				'umlbluedarktransparent': 'rgba(16, 37, 64, 0.7)',
			},
		},
	},
	plugins: [
		({ addVariant }) => {
			addVariant('child', '& > *');
			addVariant('child-hover', '& > *:hover');
		},
	],
}
