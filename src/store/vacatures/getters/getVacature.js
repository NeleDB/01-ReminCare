export default (_, getters) => (slug) => {
	const vacatures = getters.getVacatures;

	return vacatures.find((vacature) => vacature.slug === slug);
};
