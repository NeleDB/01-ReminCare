export default {
	props: {
		text: {
			type: [String, Number],
			required: true,
		},
		url: {
			type: String,
			default: "",
		},
		target: {
			type: String,
			default: "",
		},
		type: {
			type: String,
			default: "",
		},
		iconBefore: {
			type: String,
			default: "",
		},
		iconAfter: {
			type: String,
			default: "",
		},
	},
	methods: {
		click() {
			this.$emit("click");
		},
	},
};
