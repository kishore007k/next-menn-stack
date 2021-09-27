const convertToSlug = (title) => {
	return title
		.toLowerCase()
		.replace(/ /g, "-")
		.replace(/[^\w-]+/g, "");
};

export default convertToSlug;
