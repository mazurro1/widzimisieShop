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
    sal({
      threshold: 0.1,
      once: true,
    })
  }, [])
  return (
    <Layout
      history={props.location}
      headerText={props.data.contentfulHeader}
      image={props.data.contentfulHeader.image.fluid}
      home
    >
      <div data-sal="slide-right" data-sal-duration="1000">
        <AboutUs />
      </div>
      <CustomBackgroundImageParalaks
        img={props.data.backgroundImgParalaks.imageParalaks.fluid}
      />
      <div data-sal="slide-left" data-sal-duration="1000">
        <MeetUs />
      </div>
      <div data-sal="zoom-out" data-sal-duration="1000">
        <OurSuppliers />
      </div>
      <div data-sal="zoom-in" data-sal-duration="1000">
        <Services />
      </div>
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
          ...GatsbyContentfulFluid
        }
      }
    }
    backgroundImgParalaks: contentfulPageAboutUs {
      imageParalaks {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default IndexPage
