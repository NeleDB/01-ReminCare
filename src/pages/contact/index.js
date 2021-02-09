export default {
	layout: "Default/Default",
	head() {
		return {
			title: `${this.$t("navigatie.contact")} - ReminCare`,
			meta: [
				{
					hid: "description",
					name: "description",
					content: `${this.$t("contact.description")}`,
				},
			],
		};
	},
};
