// const plugin = require("tailwindcss/plugin")
const defaultTheme = require("tailwindcss/defaultTheme")
const defaultVariants = require("./tailwind-defaultVariants")

function trimWhitespace(str) {
	return str.split(/\s+/).join(" ").trim()
}

module.exports = {
	purge: [
		"./public/**/*.html",
		"./src/**/*.js",
	],
	theme: {
		extend: {
			// borderRadius: {
			// 	"75": "0.75rem",
			// },
			boxShadow: {
				"hero-sm": trimWhitespace(`
					${defaultTheme.boxShadow.xs},
					${defaultTheme.boxShadow.sm}
				`),
				"hero": trimWhitespace(`
					${defaultTheme.boxShadow.xs},
					${defaultTheme.boxShadow.default}
				`),
				"hero-md": trimWhitespace(`
					${defaultTheme.boxShadow.xs},
					${defaultTheme.boxShadow.md}
				`),
				"hero-lg": trimWhitespace(`
					${defaultTheme.boxShadow.xs},
					${defaultTheme.boxShadow.lg}
				`),
				"hero-xl": trimWhitespace(`
					${defaultTheme.boxShadow.xs},
					${defaultTheme.boxShadow.xl}
				`),
				"hero-2xl": trimWhitespace(`
					${defaultTheme.boxShadow.xs},
					${defaultTheme.boxShadow["2xl"]}
				`),
			},
			fontFamily: {
				/* eslint-disable quotes */
				mono: ['"Fira Code"', ...defaultTheme.fontFamily.mono],
				sans: [...defaultTheme.fontFamily.sans.slice(0, 3), "Inter", ...defaultTheme.fontFamily.sans.slice(3)],
				/* eslint-enable quotes */
			},
		},
		screens: {
			sm: (24 + +defaultTheme.screens.sm.slice(0, -2) + 24) + "px",
			// => @media (min-width: 640px) { ... }

			md: (24 + +defaultTheme.screens.md.slice(0, -2) + 24) + "px",
			// => @media (min-width: 768px) { ... }

			lg: (24 + +defaultTheme.screens.lg.slice(0, -2) + 24) + "px",
			// => @media (min-width: 1024px) { ... }

			xl: (24 + +defaultTheme.screens.xl.slice(0, -2) + 24) + "px",
			// => @media (min-width: 1280px) { ... }
		},
	},
	variants: {
		...defaultVariants,
		typography: [],
	},
	plugins: [
		require("@tailwindcss/ui"),

		// plugin(((flag = "dark-mode", prefix = "dark") => {
		// 	return ({ addVariant, e }) => {
		// 		addVariant(prefix, ({ modifySelectors }) => {
		// 			modifySelectors(({ className }) => {
		// 				return `.${flag} .${e(`${prefix}:${className}`)}`
		// 			})
		// 		})
		// 		addVariant(`hover:${prefix}`, ({ modifySelectors }) => {
		// 			modifySelectors(({ className }) => {
		// 				return `.${flag} .${e(`hover:${prefix}:${className}`)}:hover`
		// 			})
		// 		})
		// 		addVariant(`focus:${prefix}`, ({ modifySelectors }) => {
		// 			modifySelectors(({ className }) => {
		// 				return `.${flag} .${e(`focus:${prefix}:${className}`)}:focus`
		// 			})
		// 		})
		// 	}
		// })()),
	],
}
