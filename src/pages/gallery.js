import React from "react"
import Layout from "../components/layout"
import Gallery from "../components/Home/Gallery"

const GalleryPage = props => (
  <Layout history={props.location}>
    <Gallery />
  </Layout>
)

export default GalleryPage
