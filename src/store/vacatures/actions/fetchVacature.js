export default async function ({ commit }, slug) {
	let vacature = {};

	try {
		vacature = await this.$content(
			`/${this.$i18n.locale}/vacatures`,
			slug,
			{
				text: true,
			}
		).fetch();
	} catch {
		vacature = {};
	}

	commit("setVacature", vacature);

	return vacature;
}
