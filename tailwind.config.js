/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				display: ['"Playfair Display"', "serif"],
				body: ['"DM Sans"', "sans-serif"],
				mono: ['"JetBrains Mono"', "monospace"],
			},
			colors: {
				ink: {
					50: "#f5f0eb",
					100: "#e8ddd2",
					200: "#d4bfa8",
					300: "#bfa07e",
					400: "#a68060",
					500: "#8b6245",
					600: "#6e4d36",
					700: "#523a28",
					800: "#36261a",
					900: "#1a130d",
				},
				cream: "#faf6f1",
				parchment: "#f0e9de",
			},
			animation: {
				"fade-up": "fadeUp 0.5s ease forwards",
				shimmer: "shimmer 1.5s infinite",
			},
			keyframes: {
				fadeUp: {
					"0%": { opacity: "0", transform: "translateY(16px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				shimmer: {
					"0%": { backgroundPosition: "-200% 0" },
					"100%": { backgroundPosition: "200% 0" },
				},
			},
		},
	},
	plugins: [],
};
