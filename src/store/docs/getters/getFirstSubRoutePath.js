export default (_, getters) => (slug) => {
	const { path = null, paths = null } = getters.getRoute(slug) || {};

	return (!path && `/docs${paths[0].path}`) || "";
};
