export default async function ({ commit } = {}, options = {}) {
	const { limit = null, dir } = options;
	let vacatures = [];

	try {
		vacatures = await this.$content(`/${this.$i18n.locale}/${dir}`, {
			text: true,
		});

		if (limit) {
			vacatures = await vacatures.limit(limit);
		}

		vacatures = await vacatures.fetch();
	} catch {
		vacatures = [];
	}

	commit("setVacatures", vacatures);

	return vacatures;
}
