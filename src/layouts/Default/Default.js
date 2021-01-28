export default {
	head() {
		return {
			htmlAttrs: {
				class: this.isMobileNavOpen && "u-overflow:hidden",
			},
		};
	},
	data() {
		return {
			resetTabIndex: false,
		};
	},
	computed: {
		isMobileNavOpen() {
			return this.$store.getters["app/getIsMobileNavOpen"];
		},
	},
	watch: {
		/**
		 * What the route to always change the tabIndex to the start of the page
		 * when changing routes. Use next-tick to wait until the dom is updated
		 * to remove the tabindex.
		 */
		$route() {
			const { root } = this.$refs;

			// Everytime you change route, close the mobile nav
			this.$store.dispatch("app/closeMobileNav");
			this.resetTabIndex = true;

			this.$nextTick(() => {
				root.focus();
				this.resetTabIndex = false;
			});
		},
	},
};
