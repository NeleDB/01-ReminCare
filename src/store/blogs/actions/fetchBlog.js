export default async function ({ commit }, slug) {
	let blog = {};

	try {
		blog = await this.$content("blogs", slug, { text: true }).fetch();
	} catch {
		blog = {};
	}

	commit("setBlog", blog);

	return blog;
}
