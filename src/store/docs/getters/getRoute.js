export default (_, getters) => (slug) => {
	const routes = getters.getRoutes;

	return routes.find((route) => route.slug === slug) || null;
};
