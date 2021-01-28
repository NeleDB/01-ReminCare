export default (_, getters) => (slug) => {
	const blogs = getters.getBlogs;

	return blogs.find((blog) => blog.slug === slug);
};
