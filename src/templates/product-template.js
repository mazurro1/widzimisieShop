import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import styled from "styled-components"
import { Colors } from "../common"

const StyledAreas = styled.div`
  background-color: ${Colors.basicLight};
  color: white;
  border-radius: 5px;
  padding: 10px;
`

const ProductTemplate = ({
  data: {
    contentfulProduct: {
      producer,
      model,
      typeOfGlasses,
      colors,
      sex,
      price,
      productImage,
      form: { form },
      material: { material },
      typ: { typ },
    },
  },
}) => {
  return (
    <Layout noImage>
      <section className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <h1>Producent {producer}</h1>
            <h3>Model {model}</h3>
            <h4>Cena {price}</h4>
          </div>
          <div className="col-md-6 col-12 mx-auto">
            <Img fluid={productImage.fluid} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-12 mb-4">
            <StyledAreas>
              <h3>Form</h3>
              <p>{form}</p>
            </StyledAreas>
          </div>
          <div className="col-md-4 col-12 mb-4">
            <StyledAreas>
              <h3>Materiał</h3>
              <p>{material}</p>
            </StyledAreas>
          </div>
          <div className="col-md-4 col-12 mb-4">
            <StyledAreas>
              <h3>Typ</h3>
              <p>{typ}</p>
            </StyledAreas>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export const query = graphql`
  query($producer: String!, $model: String!) {
    contentfulProduct(producer: { eq: $producer }, model: { eq: $model }) {
      producer
      model
      typeOfGlasses
      colors
      sex
      price
      productImage {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      form {
        form
      }
      material {
        material
      }
      typ {
        typ
      }
    }
  }
`
export default ProductTemplate
