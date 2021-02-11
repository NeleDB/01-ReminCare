export default {
	nuxtI18n: {
		paths: {
			nl: "/vacatures",
			fr: "/offres-d-emploi",
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
	},
	async asyncData({ store, app }) {
		await store.dispatch("vacatures/fetchVacatures", {
			dir: app.i18n.t("vacatures.link"),
		});
	},
};
