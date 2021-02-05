export default async function ({ commit }, { slug, dir } = {}) {
	let vacature = {};

	try {
		vacature = await this.$content(`/${this.$i18n.locale}/${dir}`, slug, {
			text: true,
		}).fetch();
	} catch {
		vacature = {};
	}

	commit("setVacature", vacature);

	return vacature;
}
