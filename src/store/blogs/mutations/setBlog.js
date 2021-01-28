export default (state, newBlog) => {
	const isCached = state.blogs.find((blog) => blog.slug === newBlog.slug);

	if (isCached) {
		state.blogs = state.blogs.map((blog) => {
			if (blog.slug === newBlog.slug) {
				return newBlog;
			}

			return blog;
		});
	} else {
		state.blogs.push(newBlog);
	}
};
