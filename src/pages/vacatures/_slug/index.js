import { default as slugs } from "./-slugs";

export default {
	layout: "Default/Default",
	head() {
		return {
			title: `${this.vacature.title} - ReminCare` || "",
			meta: [
				{
					hid: "description",
					name: "description",
					content: this.vacature.description || "",
				},
			],
		};
	},
	computed: {
		slug() {
			return this.$route.params.slug;
		},
		vacature() {
			return (
				this.$store.getters["vacatures/getVacature"](this.slug) || {}
			);
		},
	},
	async asyncData({ store, params, app }) {
		const { slug } = params;

		await store.dispatch("vacatures/fetchVacature", {
			slug,
			dir: app.i18n.t("vacatures.link"),
		});

		await store.dispatch("i18n/setRouteParams", {
			fr: { slug: slugs[slug].fr },
			nl: { slug: slugs[slug].nl },
		});
	},
	methods: {
		back() {
			this.$router.back();
		},
	},
};
