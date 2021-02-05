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
			required: true,
		},
		subject: {
			type: String,
			required: false,
		},
	},
};
