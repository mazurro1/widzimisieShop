import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import styled from "styled-components"
import { Colors } from "../common"

const StyledAreas = styled.div`
  background-color: #f4f4f4;
  color: ${Colors.basicDark};
  border-radius: 2px;
  padding: 10px;
  overflow: auto;
  height: 300px;
  font-size: 0.9rem;
  ::-webkit-scrollbar {
    width: 10px;
    background: #ddd;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #676767;
    border-radius: 20px;
  }
`

const PriceDiv = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: #f44336;
  padding: 5px 10px;
  color: white;
  font-size: 1.4rem;
  @media (max-width: 768px) {
    top: 0;
    right: 15px;
  }
`

const DivProdModel = styled.div`
  h1 {
    display: inline-block;
  }
  h3 {
    display: inline-block;
  }
`

const DivProd = styled.div`
  color: ${Colors.second};
  font-weight: bold;
  display: inline-block;
  font-size: 1.7rem;
  padding-left: 10px;
`

const DivMod = styled.div`
  color: ${Colors.second};
  font-weight: bold;
  display: inline-block;
  font-size: 1.1rem;
  padding-left: 10px;
`
const UperInfo = styled.div`
  font-size: 1.5rem;
`

const BoldStyle = styled.div`
  color: ${Colors.second};
  font-size: 1.4rem;
  margin-bottom: 5px;
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
  const newFormArr = form.includes("__") ? form.split("__") : ["", "", form]
  const newMaterialArr = material.includes("__")
    ? material.split("__")
    : ["", "", material]
  const newTypArr = typ.includes("__") ? typ.split("__") : ["", "", typ]
  return (
    <Layout noImage>
      <section className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <DivProdModel className="row">
              <div className="col-12">
                <h1>Producent: </h1>
                <DivProd>{producer}</DivProd>
              </div>
              <div className="col-12">
                <h3 className="m-0">Model: </h3>
                <DivMod>{model}</DivMod>
              </div>
              <div className="col-12">
                <h3 className="m-0">Płeć: </h3>
                <DivMod>{sex.join(", ")}</DivMod>
              </div>
              <div className="col-12">
                <h3 className="m-0">Rodzaj: </h3>
                <DivMod>{typeOfGlasses.join(", ")}</DivMod>
              </div>
              <div className="col-12">
                <h3 className="m-0">Kolory: </h3>
                <DivMod>{colors.join(", ")}</DivMod>
              </div>
            </DivProdModel>
          </div>
          <div className="col-md-6 col-12 mx-auto mt-4">
            <Img fluid={productImage.fluid} />
            <PriceDiv>{price} zł</PriceDiv>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4 col-12 mb-4">
            <UperInfo>Form: </UperInfo>
            <StyledAreas>
              <BoldStyle>{newFormArr[1]}</BoldStyle>
              <p>{newFormArr[2]}</p>
            </StyledAreas>
          </div>
          <div className="col-md-4 col-12 mb-4">
            <UperInfo>Materiał: </UperInfo>
            <StyledAreas>
              <BoldStyle>{newMaterialArr[1]}</BoldStyle>
              <p>{newMaterialArr[2]}</p>
            </StyledAreas>
          </div>
          <div className="col-md-4 col-12 mb-4">
            <UperInfo>Typ: </UperInfo>
            <StyledAreas>
              <BoldStyle>{newTypArr[1]}</BoldStyle>
              <p>{newTypArr[2]}</p>
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
