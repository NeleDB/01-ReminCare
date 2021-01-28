export default {
	computed: {
		isMobileNavOpen() {
			return this.$store.getters["app/getIsMobileNavOpen"];
		},
	},
	watch: {
		isMobileNavOpen(newValue) {
			if (newValue !== this.isClosed) {
				this.isClosed = newValue;
			}
		},
	},
	methods: {
		click() {
			if (this.isMobileNavOpen) {
				this.$store.dispatch("app/closeMobileNav");
			} else {
				this.$store.dispatch("app/openMobileNav");
			}
		},
	},
};
