import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = props => (
  <Layout history={props.location}>
    <SEO title="404: Not found" />
    <div className="container mt-5">
      <h1 className="text-center">Coś poszło nie tak 😐</h1>
    </div>
  </Layout>
)

export default NotFoundPage
