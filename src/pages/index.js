export default {
	layout: "Default/Default",
	head() {
		return {
			title: "ReminCare",
			meta: [
				{
					hid: "description",
					name: "description",
					content:
						"Interdisciplinaire praktijk voor baby's en ouders",
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
		await store.dispatch(
			"vacatures/fetchVacatures",
			app.i18n.t("vacatures.link"),
			{
				limit: 2,
			}
		);
	},
};
