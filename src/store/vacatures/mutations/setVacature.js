export default (state, newVacature) => {
	const isCached = state.vacatures.find(
		(vacature) => vacature.slug === newVacature.slug
	);

	if (isCached) {
		state.vacatures = state.vacatures.map((vacature) => {
			if (vacature.slug === newVacature.slug) {
				return newVacature;
			}

			return vacature;
		});
	} else {
		state.vacatures.push(newVacature);
	}
};
