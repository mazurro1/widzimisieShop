import React from "react"
import AboutUs from "../components/Home/AboutUs"
import MeetUs from "../components/Home/MeetUs"
import OurSuppliers from "../components/Home/OurSuppliers"
import Services from "../components/Home/Services"
import Gallery from "../components/Home/Gallery"
import Layout from "../components/layout"
import CustomBackgroundImage from "../common/CustomBackgroundImageParalaks"
import { graphql } from "gatsby"

const IndexPage = props => {
  return (
    <Layout
      history={props.location}
      headerText={props.data.contentfulHeader}
      image={props.data.contentfulHeader.image.fluid}
      home
    >
      <AboutUs />
      <CustomBackgroundImage img={props.data.contentfulHeader.image.fluid} />
      <MeetUs />
      <OurSuppliers />
      <Services />
      <Gallery />
    </Layout>
  )
}

export const query = graphql`
  {
    contentfulHeader {
      text1
      text2
      image {
        fluid(maxWidth: 1920) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
