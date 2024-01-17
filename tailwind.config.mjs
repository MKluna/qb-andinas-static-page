/** 
 * @type {import('tailwindcss').Config} 
 * @import "~@flaticon/flaticon-uicons/css/all/all";
 * @import url('https://cdn-uicons.flaticon.com/2.0.0/uicons-brands/css/uicons-brands.css')
 * */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js',
		"./node_modules/tw-elements/dist/js/**/*.js"
	],	
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				body: "rgb(var(--color-bg))",
				"box-bg": "rgb(var(--color-box))",
				"box-shadow": "rgb(var(--box-sd))",
				"box-border": "rgb(var(--box-border))",
				primary: "#1d4ed8",
				"heading-1": "rgb(var(--heading-1))",
				"heading-2": "rgb(var(--heading-2))",
				"heading-3": "rgb(var(--heading-3))",
			},
			animation: {
				marquee: 'marquee 25s linear infinite',
				marquee2: 'marquee2 25s linear infinite',
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' },
				},
				marquee2: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0%)' },
				},
			},
			screens: {
				midmd: "880px"
			}
		},
	},
	plugins: [
		require('flowbite/plugin'),
		require("tw-elements/dist/plugin.cjs")
	],
}
