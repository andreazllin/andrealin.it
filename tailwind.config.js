const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ['MilliardBook', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
				mono: ['SkModernistMono', 'monospace'],
				regular: ['SkModernistRegular'],
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						a: {
							textDecoration: 'none',
							color: theme('colors.blue.500'),
							fontWeight: '600',
							'&:hover': {
								textDecoration: 'underline',
							},
						},
					},
				},
			}),
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.coolGray,
			red: colors.red,
			yellow: colors.amber,
			green: colors.emerald,
			blue: colors.blue,
			indigo: colors.indigo,
			purple: colors.violet,
			pink: colors.pink,
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
};
