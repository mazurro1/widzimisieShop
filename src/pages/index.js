import React, { useEffect } from "react"
import AboutUs from "../components/Home/AboutUs"
import MeetUs from "../components/Home/MeetUs"
import OurSuppliers from "../components/Home/OurSuppliers"
import Services from "../components/Home/Services"
import Layout from "../components/layout"
import CustomBackgroundImageParalaks from "../common/CustomBackgroundImageParalaks"
import { graphql } from "gatsby"
import sal from "sal.js"

const IndexPage = props => {
  useEffect(() => {
    sal()
  }, [])
  return (
    <Layout
      history={props.location}
      headerText={props.data.contentfulHeader}
      image={props.data.contentfulHeader.image.fluid}
      home
    >
      <AboutUs />
      <CustomBackgroundImageParalaks
        img={props.data.backgroundImgParalaks.imageParalaks.fluid}
      />
      <MeetUs />
      <OurSuppliers />
      <Services />
    </Layout>
  )
}

export const query = graphql`
  {
    contentfulHeader {
      text1
      text2
      image {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
    backgroundImgParalaks: contentfulPageAboutUs {
      imageParalaks {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
