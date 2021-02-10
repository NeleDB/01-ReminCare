export default async function ({ commit } = {}, dir, options = {}) {
	const { limit = null } = options;
	let vacatures = [];

	console.log(options);

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
