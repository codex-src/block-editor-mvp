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
			borderRadius: {
				"75": "0.75rem",
			},
			boxShadow: {
				"hero-sm": trimWhitespace(`
					0 0 0 1px rgba(0, 0, 0, 0.05),
					${defaultTheme.boxShadow.sm}
				`),
				"hero": trimWhitespace(`
					0 0 0 1px rgba(0, 0, 0, 0.05),
					${defaultTheme.boxShadow.default}
				`),
				"hero-md": trimWhitespace(`
					0 0 0 1px rgba(0, 0, 0, 0.05),
					${defaultTheme.boxShadow.md}
				`),
				"hero-lg": trimWhitespace(`
					0 0 0 1px rgba(0, 0, 0, 0.05),
					${defaultTheme.boxShadow.lg}
				`),
				"hero-xl": trimWhitespace(`
					0 0 0 1px rgba(0, 0, 0, 0.05),
					${defaultTheme.boxShadow.xl}
				`),
				"hero-2xl": trimWhitespace(`
					0 0 0 1px rgba(0, 0, 0, 0.05),
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
			xs: `${16 + 512 + 16}px`,
			// => @media (min-width: 540px) { ... }

			sm: `${16 + 640 + 16}px`,
			// => @media (min-width: 672px) { ... }

			md: `${16 + 768 + 16}px`,
			// => @media (min-width: 752px) { ... }

			lg: `${16 + 1024 + 16}px`,
			// => @media (min-width: 1008px) { ... }

			xl: `${16 + 1280 + 16}px`,
			// => @media (min-width: 1264px) { ... }
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
