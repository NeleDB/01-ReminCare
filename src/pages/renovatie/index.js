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
			title: "Renovatie - ReminCare",
			meta: [
				{
					hid: "description",
					name: "description",
					content: "Renovatiewerken ReminCare",
				},
			],
		};
	},
	computed: {
		renovatie() {
			return this.$store.getters["renovatie/getRenovatie"];
		},
	},
	async asyncData({ store, app }) {
		await store.dispatch(
			"renovatie/fetchRenovatie",
			app.i18n.t("renovatie.link")
		);
	},
};
