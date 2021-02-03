export default async function ({ commit } = {}) {
	let vacatures = [];

	try {
		vacatures = await this.$content(`/${this.$i18n.locale}/vacatures`, {
			text: true,
		}).fetch();
	} catch {
		vacatures = [];
	}

	commit("setVacatures", vacatures);

	return vacatures;
}
