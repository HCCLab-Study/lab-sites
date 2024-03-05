/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'custom-blue': '#2370C8',
				'custom-red': '#A64D4D',
				'custom-gray': '#646464',
				'custom-navy': '#262A4E',
				'font-gray': '#646464',
				'section-gray' : '#F4F4F4',
			  },
		},
	},
	plugins: [],
};
