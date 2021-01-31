import i18nRoutes from "./locales/i18n-routes";

export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: "static",
	srcDir: "src/",

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "ReminCare",
		htmlAttrs: {
			lang: "nl",
		},
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{ hid: "description", name: "description", content: "" },
			{
				name: "keywords",
				content:
					"ReminCare, logopedie, prelogopedie, zorg, multidisciplinaire praktijk, Deux-Acren, Ine De Bruycker",
			},
			{
				name: "description",
				content:
					"Multidisciplinaire praktijk gericht op baby's en ouders",
			},
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
	},

	css: ["@/scss/main.scss"],
	components: [
		{
			path: "~/components",
			/**
			 * Indicate which file extensions should be scanned and registered.
			 * Fixes the problem when splitting up a component in multiple
			 * files.
			 */
			extensions: ["vue"],
			pattern: "**/*.vue",
		},
	],
	buildModules: ["@nuxtjs/google-analytics"],
	modules: [
		"@nuxt/content",
		"@nuxtjs/svg",
		"@nuxt/image",
		[
			"nuxt-i18n",
			{
				strategy: "prefix_and_default",
				parsePages: false,
				pages: i18nRoutes,
			},
		],
	],
	build: {},
	server: {
		port: 9000,
	},
	router: {
		linkActiveClass: "is-active",
	},
	image: {
		ipx: {
			dir: "~/assets/images",
		},
	},
	i18n: {
		langDir: "../locales/",
		defaultLocale: "nl",
		locales: [
			{ code: "fr", iso: "fr-FR", file: "fr.json" },
			{ code: "nl", iso: "nl-NL", file: "nl.json" },
		],
		lazy: true,
	},
	// googleAnalytics: {
	// 	id: "259061419",
	// },
};
