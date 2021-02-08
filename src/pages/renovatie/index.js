export default {
	nuxtI18n: {
		paths: {
			nl: "/renovatie",
			fr: "/rénovation",
		},
	},
	layout: "Default/Default",
	head() {
		return {
			title: `${this.$t("navigatie.renovatie")} - ReminCare`,
			meta: [
				{
					hid: "description",
					name: "description",
					content: "Renovatiewerken ReminCare",
				},
			],
		};
	},
};
