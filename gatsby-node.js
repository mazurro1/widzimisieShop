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
    }
  `)
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
