/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.{html,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				'umlblue': {
					100: '#EEF2FC',
					200: '#CBD9F6',
					500: '#3068D9',
					900: '#102540',
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
