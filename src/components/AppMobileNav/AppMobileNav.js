export default {
	computed: {
		isMobileNavOpen() {
			return this.$store.getters["app/getIsMobileNavOpen"];
		},
	},
	methods: {
		/**
		 * If the last child within the mobile nav loses focus, then close the
		 * mobile nav.
		 */
		focusOut(e) {
			const { target } = e;
			// Select parentNode because the focusable element is within an li.
			const listItem = target.parentNode;
			const isLastChild = !listItem.nextSibling;

			if (isLastChild) {
				this.$store.dispatch("app/closeMobileNav");
			}
		},
	},
};
