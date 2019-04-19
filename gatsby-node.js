const path = require('path');

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;

	return new Promise((resolve, reject) => {
		const doctemplate = path.resolve('src/templates/docpage.js');
		// Query for markdown nodes to use in creating pages.
		resolve(
			graphql(
				`
					query {
						allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___priority]}) {
							edges {
								node {
									frontmatter {
										title
										path
										description
										priority
									}
								}
							}
						}
					}
				`
			).then(result => {
				const posts = result.data.allMarkdownRemark.edges;

				posts.forEach(({ node }) => {
					const path = node.frontmatter.path;
					createPage({
						path,
						component: doctemplate,
						context: {
							pathSlug: path
						}
					});
					resolve();
				});
			})
		);
	});
};