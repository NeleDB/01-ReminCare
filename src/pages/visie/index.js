export default {
	layout: "Default/Default",
	head() {
		return {
			title: "Visie - ReminCare",
			meta: [
				{
					hid: "description",
					name: "description",
					content: "De visie van ReminCare",
				},
			],
		};
	},

	nuxtI18n: {
		paths: {
			nl: "/visie",
			fr: "/vision",
		},
	},
};
