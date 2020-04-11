/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require("react")
const Navigation = require("./src/components/Navigation").default
const Footer = require("./src/components/Footer").default
exports.wrapPageElement = ({ element, props }) => {
  return (
    <>
      <Navigation history={props.location} />
      {element}
      <Footer />
    </>
  )
}
