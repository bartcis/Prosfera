const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);

const pageQuery = `
{
  allWordpressPage {
    edges {
      node {
        id
        slug
        status
        template
      }
    }
  }
}`

const postsQuery = `
{
  allWordpressPost {
    edges {
      node {
        id  
        slug
        status
        template
        format
        title
        date
        featured_media{
          localFile{
            childImageSharp{
              fluid(maxWidth: 1920) {
                src
              }
            }
          }
        }
      }
    }
  }
}
`
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(pageQuery)
      .then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        const pageTemplate = path.resolve("./src/templates/page.js");

        _.each(result.data.allWordpressPage.edges, edge => {
          createPage({
            path: `/${edge.node.slug}/`,
            component: slash(pageTemplate),
            context: {
              id: edge.node.id,
            },
          });
        });
      })

      .then(() => {
        graphql(postsQuery)
          .then(result => {
            if (result.errors) {
              reject(result.errors);
            }
            const postTemplate = path.resolve("./src/templates/post.js");

            _.each(result.data.allWordpressPost.edges, edge => {
              createPage({
                path: `/realizacje/${edge.node.slug}/`,
                component: slash(postTemplate),
                context: {
                  id: edge.node.id,
                },
              });
            });
            resolve();
          });
      });
  });
};
