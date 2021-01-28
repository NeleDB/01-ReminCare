export default {
	props: {
		url: {
			type: String,
			default: "",
		},
		type: {
			type: String,
			default: "",
		},
		target: {
			type: String,
			default: "",
		},
	},
	methods: {
		click() {
			this.$emit("click");
		},
	},
	computed: {
		rel() {
			switch (this.target) {
				case "_blank":
					return "noopener noreferer";

				default:
					return "";
			}
		},
	},
};
