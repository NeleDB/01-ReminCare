export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
		button: {
			type: String,
			default: "",
		},
		url: {
			type: String,
			default: "",
		},
	},
};
