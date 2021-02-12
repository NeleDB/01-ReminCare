export default {
	computed: {
		currentLanguage() {
			return this.$i18n.locale.toUpperCase();
		},
	},
	data() {
		return {
			isOpen: false,
		};
	},
	methods: {
		toggle() {
			this.isOpen = !this.isOpen;
		},
		close() {
			this.isOpen = false;
		},
		open() {
			this.isOpen = true;
		},
	},
};
