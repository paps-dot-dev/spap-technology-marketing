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
			animation: {
				gradient: 'gradientShift 10s ease infinite',
			},
			keyframes: {
				gradientShift: {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' },
				},
			},
			colors: {
				primary: '#2C3E50',
				secondary: '#16A085',
				background: '#34495E',
				'text-primary': '#BDC3C7',
				'accent-primary': '#E67E22',
				'accent-magenta': '#ff0075',
				'accent-purple': '#7f00ff',
				'accent-secondary': '#007BFF',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
