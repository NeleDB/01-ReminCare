export default {
	layout: "Default/Default",
	head() {
		return {
			title: `${this.$t("navigatie.visie")} - ReminCare`,
			meta: [
				{
					hid: "description",
					name: "description",
					content: `${this.$t("visie.description")}`,
				},
			],
		};
	},
};
