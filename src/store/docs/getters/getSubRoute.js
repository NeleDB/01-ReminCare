export default (_, getters) => (slug, id) => {
	const subs = getters.getSubRoutes(slug);

	return subs && subs.find((sub) => sub.slug === id);
};
