export default {
	data() {
		return {
			// isHamburgerFocused: false,
		};
	},
	computed: {
		isMobileNavOpen() {
			return this.$store.getters["app/getIsMobileNavOpen"];
		},
	},
	methods: {
		/**
		 * If the hamburger would lose focus, the mobile nav is open and the
		 * newly focused element is the app logo, then the mobile nav should be
		 * closed. If this is not the case, then it stays open.
		 */
		focusIn(e) {
			const { target } = e;
			const appLogoEl = this.$refs["app-logo"].$el;

			if (target === appLogoEl && this.isMobileNavOpen) {
				this.$store.dispatch("app/closeMobileNav");
			}
		},
	},
};
