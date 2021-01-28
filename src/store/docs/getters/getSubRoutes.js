export default (_, getters) => (slug) => {
	const route = getters.getRoute(slug);

	return route.paths || null;
};
