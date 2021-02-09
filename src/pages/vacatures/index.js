export default {
	nuxtI18n: {
		paths: {
			nl: "/vacatures",
			fr: "/postes-vacants",
		},
	},
	layout: "Default/Default",
	head() {
		return {
			title: `${this.$t("navigatie.vacatures")} - ReminCare`,
			meta: [
				{
					hid: "description",
					name: "description",
					content: `${this.$t("vacatures.description")}`,
				},
			],
		};
	},
	computed: {
		vacatures() {
			return this.$store.getters["vacatures/getVacatures"];
		},
		hasVacatures() {
			return this.vacatures.length > 0;
		},
	},
	async asyncData({ store, app }) {
		await store.dispatch(
			"vacatures/fetchVacatures",
			app.i18n.t("vacatures.link")
		);
	},
};
