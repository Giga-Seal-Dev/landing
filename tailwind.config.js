/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primaryLight: '#F1F1F1',
				secondary: '#62cccc',
				secondaryNeutral: '#D9D9D9',
				accent: '#5fc456',
			},
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
