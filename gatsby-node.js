const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);
const createPaginatedPages = require('gatsby-paginate');

const queryAll = `
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
        acf{
          krotki_opis
          dlugi_opis
          miejsce_projektu
          rok_realizacji
          typ_budynku
          przeznaczenie_budynku
          dlugosc_instalacji
          foto_1_opis
          foto_1 
          foto_2_opis
          foto_2 
          foto_3_opis
          foto_3 
          foto_4_opis
          foto_4 
        }
      }
    }
  }
}
`
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {

    const postTemplate = path.resolve('./src/templates/post.js');
    const pageTemplate = path.resolve('./src/templates/page.js');

    resolve(
      graphql(queryAll).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        const pages = result.data.allWordpressPage.edges

        pages.forEach( edge => {
          createPage({
            path: `/${edge.node.slug}/`,
            component: slash(pageTemplate),
            context: {
              id: edge.node.id,
            },
          })
        })

        // createPaginatedPages({
        //   edges: posts,
        //   createPage: createPage,
        //   pageTemplate: 'src/templates/post.js',
        //   pageLength: 8,
        //   pathPrefix: 'posts'
        // })

        const posts = result.data.allWordpressPost.edges

        posts.forEach( edge => {
          createPage({
            path: `/realizacje/${edge.node.slug}/`,
            component: slash(postTemplate),
            context: {
              id: edge.node.id,
            },
          })
        })
      })
    )
  });
};
