export default () => ({
	routes: [
		{
			name: "Design tokens",
			slug: "design-tokens",
			paths: [
				{
					name: "Concept",
					slug: "concept",
					path: "/design-tokens/concept",
				},
				{
					name: "Spacing",
					slug: "spacing",
					path: "/design-tokens/spacing",
				},
				{
					name: "Typography",
					slug: "typography",
					path: "/design-tokens/typography",
				},
				{
					name: "Colors",
					slug: "colors",
					path: "/design-tokens/colors",
				},
			],
		},
		{
			name: "Methodology",
			slug: "methodology",
			paths: [
				{
					name: "BEM",
					slug: "bem",
					path: "/methodology/bem",
				},
				{
					name: "BEMIT",
					slug: "bemit",
					path: "/methodology/bemit",
				},
				{
					name: "Utility",
					slug: "utility",
					path: "/methodology/utility",
				},
				{
					name: "System",
					slug: "system",
					path: "/methodology/system",
				},
			],
		},
	],
	doc: null,
});
