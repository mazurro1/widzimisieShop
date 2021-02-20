import React from "react"
import Layout from "../components/layout"
import PromotionsAndNews from "../components/Home/PromotionsAndNews"

const GalleryPage = props => (
  <Layout history={props.location} noImage>
    <PromotionsAndNews />
  </Layout>
)

export default GalleryPage
