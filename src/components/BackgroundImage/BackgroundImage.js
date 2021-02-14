export default {
	props: {
		image: {
			type: String,
			required: true,
		},
		alt: {
			type: String,
			required: true,
		},
		aspectRatio: {
			type: Number,
			required: false,
		},
	},
};
