export default {
	layout: "Default/Default",
	head() {
		return {
			title: "ReminCare",
			meta: [
				{
					hid: "description",
					name: "description",
					content: `${this.$t("home.description")}`,
				},
				{
					hid: "og:description",
					property: "og:description",
					content: `${this.$t("home.description")}`,
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
			limit: 2,
		});
	},
};
