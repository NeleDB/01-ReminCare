export default async function ({ commit }) {
	let renovatie = {};

	try {
		renovatie = await this.$content(
			`/${this.$i18n.locale}/renovatie`,
			"renovatie",
			{
				text: true,
			}
		).fetch();
	} catch {
		renovatie = {};
	}

	commit("setRenovatie", renovatie);

	return renovatie;
}
