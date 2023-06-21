module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"../../packages/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			colors: {
				primary: "#E10600",
				carbonBlack: "#15151E",
				lightBlack: "#38383f",
				warmWhite: "#F7F4F1",
				yellow: "#FFDD01",
				gray70: "#5B5B62",
				gray20: "#D0D0D2",
				gray30: "#B9B9BC",
				gray40: "#A1A1A5",
				gray50: "#8A8A8F",
				gray80: "#44444B",
				gray90: "#F3F3F4",
				green: "#009900",
			},
			spacing: {
				128: "32rem",
				144: "36rem",
			},
			borderRadius: {
				"4xl": "2rem",
			},
			borderWidth: {
				DEFAULT: "1px",
				0: "0",
				2: "2px",
				3: "3px",
				4: "4px",
				6: "6px",
				8: "8px",
			},
			fontSize: {
				Oxs: ["13px", "13px"],
				O4xl: ["42px", "48px"],
				Osm: ["15px", "18px"],
				"3xl": ["32px", "32px"],
			},
			container: {
				screens: {
					xl: "1320px",
					"2xl": "1320px",
				},
			},
			boxShadow: {
				inner: "0 0 0 2px #e10600 inset",
				innerWhite: "0 0 0 1px #fff inset",
			}
		},
	},
	plugins: [],
};

