export default ({ commit, getters }) => {
	const isMobileNavOpen = getters.getIsMobileNavOpen;

	if (isMobileNavOpen) {
		commit("setIsMobileNavOpen", false);
	}
};
