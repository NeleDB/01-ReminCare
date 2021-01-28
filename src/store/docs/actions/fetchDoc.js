export default async function ({ commit }, { slug, id = null } = {}) {
	let doc = {};

	try {
		if (id) {
			doc = await this.$content("docs", slug, id).fetch();
		} else {
			doc = await this.$content("docs", slug).fetch();
		}
	} catch {
		doc = {};
	}

	commit("setDoc", doc);

	return doc;
}
