export default {
	layout: "Default/Default",
	head() {
		return {
			title: "Vacatures - ReminCare",
			meta: [
				{
					hid: "description",
					name: "description",
					content: "All vacatures",
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
	async asyncData({ store }) {
		await store.dispatch("vacatures/fetchVacatures");
	},
};
