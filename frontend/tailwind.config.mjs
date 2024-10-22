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
				'background-primary': '#1E1E1E',
				'text-primary': '#FFFFFF',
				'accent-primary': '#5865F2',
				'accent-secondary': '#33D1FF',
				'accent-pop': '#FF6F91',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
