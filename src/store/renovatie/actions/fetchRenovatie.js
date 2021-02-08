export default async function ({ commit }, dir) {
	let renovatie = {};

	try {
		renovatie = await this.$content(`/${this.$i18n.locale}/${dir}`, dir, {
			text: true,
		}).fetch();
	} catch {
		renovatie = {};
	}

	commit("setRenovatie", renovatie);

	return renovatie;
}
