export default async function ({ commit } = {}, dir) {
	let vacatures = [];

	try {
		vacatures = await this.$content(`/${this.$i18n.locale}/${dir}`, {
			text: true,
		}).fetch();
	} catch {
		vacatures = [];
	}

	// vacatures = vacatures.map((vacature) => ({
	// 	...vacature,
	// 	path: vacature.path.replace(`/${this.$i18n.defaultLocale}`, ""),
	// }));

	commit("setVacatures", vacatures);

	return vacatures;
}
