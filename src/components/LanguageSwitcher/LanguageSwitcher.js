export default {
	computed: {
		currentLanguage() {
			return this.$i18n.locale.toUpperCase();
		},
	},
};
