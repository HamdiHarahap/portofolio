/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				primary: 'linear-gradient(to right, #AD1DEB, #6E72FC)',
			},
		},
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				'.text-primary': {
					backgroundImage: 'linear-gradient(to right, #AD1DEB, #6E72FC)',
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
				},
			})
		},
	],
}
