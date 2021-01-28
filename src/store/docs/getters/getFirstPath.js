export default (_, getters) => {
	const routes = getters.getRoutes;
	const firstRoute = routes[0];
	const { path = null, paths = null } = firstRoute;

	return path ? `/docs/${path}` : `/docs${paths[0].path}`;
};
