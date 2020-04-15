const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      products: allContentfulProduct {
        edges {
          node {
            producer
            model
          }
        }
      }
      sites: contentfulPageOurSuppliers {
        text1
        text2
        text3
        text4
        text5
        text6
        text7
        text8
        text9
      }
    }
  `)
  const sitesToTemplate = Object.values(data.sites)

  sitesToTemplate.forEach((_, index) => {
    createPage({
      path: `/sites/${index + 1}`,
      component: path.resolve("./src/templates/sites-template.js"),
      context: {
        title: index,
      },
    })
  })

  data.products.edges.forEach(({ node }) => {
    createPage({
      path: `/products/${node.producer.toLowerCase()}-${node.model.toLowerCase()}`,
      component: path.resolve("./src/templates/product-template.js"),
      context: {
        producer: node.producer,
        model: node.model,
      },
    })
  })
}
