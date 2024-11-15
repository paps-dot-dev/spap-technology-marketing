/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			colors: {
				'primary': '#1A1A1A',
				'secondary': '#2b2b2b',
				'accent-green': '#00ff94',
				'accent-magenta': '#ff0075',
				'accent-purple': '#7f00ff'
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
