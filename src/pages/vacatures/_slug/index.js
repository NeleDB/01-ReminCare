export default {
	layout: "Default/Default",
	head() {
		return {
			title: this.vacature.title,
			meta: [
				{
					hid: "description",
					name: "description",
					content: this.vacature.description,
				},
			],
		};
	},
	computed: {
		slug() {
			return this.$route.params.slug;
		},
		vacature() {
			return this.$store.getters["vacatures/getVacature"](this.slug);
		},
	},
	async asyncData({ store, params }) {
		const { slug } = params;

		await store.dispatch("vacature/fetchVacature", slug);
	},
	methods: {
		back() {
			this.$router.back();
		},
	},
};
