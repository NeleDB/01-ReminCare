export default {
	layout: "Default/Default",
	head() {
		return {
			title: `${this.$t("navigatie.visie")} - ReminCare`,
			meta: [
				{
					hid: "description",
					name: "description",
					content: "De visie van ReminCare",
				},
			],
		};
	},
};
