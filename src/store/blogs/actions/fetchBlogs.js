export default async function ({ commit }, options = {}) {
	const { limit = null } = options;
	let blogs = [];

	try {
		blogs = await this.$content("blogs", { text: true }).sortBy(
			"createdAt",
			"desc"
		);

		if (limit) {
			blogs = await blogs.limit(limit);
		}

		blogs = await blogs.fetch();
	} catch {
		blogs = [];
	}

	commit("setBlogs", blogs);

	return blogs;
}
