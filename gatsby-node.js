const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query MyQuery {
      allContentfulPosts {
        nodes {
          slug
        }
      }
    }
  `);

  const {
    data: {
      allContentfulPosts: { nodes },
    },
  } = result;

  nodes.forEach(post => {
    createPage({
      path: `post/${post.slug}`,
      component: path.resolve(`src/pages/blog-post.js`),
      context: {
        slug: post.slug,
      },
    });
  });
};
