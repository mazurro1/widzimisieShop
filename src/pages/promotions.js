import React from "react"
import Layout from "../components/layout"
import PromotionsAndNews from "../components/Home/PromotionsAndNews"
import SEO from "../components/seo"

const GalleryPage = props => (
  <Layout history={props.location} noImage>
    <SEO title="Promocje" description="Promocje" />
    <PromotionsAndNews />
  </Layout>
)

export default GalleryPage
