import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import styled from "styled-components"
import { Colors } from "../common"
import { CSSTransition } from "react-transition-group"
import { MdClose } from "react-icons/md"
import SEO from "../components/seo"

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
  border-radius: 50%;
  /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 110px;
  width: 110px; */
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
  color: ${Colors.secondDark};
  font-weight: bold;
  display: inline-block;
  font-size: 1.7rem;
  padding-left: 10px;
`

const DivMod = styled.div`
  color: ${Colors.secondDark};
  font-weight: bold;
  display: inline-block;
  font-size: 1.1rem;
  padding-left: 10px;
`
const UperInfo = styled.div`
  font-size: 1.5rem;
`

const BoldStyle = styled.div`
  color: ${Colors.secondDark};
  font-size: 1.4rem;
  margin-bottom: 5px;
`

const PositionImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 145px;
`
const SizeImageClicked = styled.div`
  width: 80%;
  height: 80%;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .imageWidth {
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 600px;
    max-height: 400px;
  }

  .closeButton {
    position: absolute;
    top: 5px;
    right: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    font-size: 1.5rem;
    cursor: pointer;
    transition-property: transform;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    &:hover {
      transform: scale(1.2);
    }
  }
  /* img {
    position: relative;
    max-width: 600px;
    max-height: 400px;
  } */
`

const ClickImageProduct = styled.div`
  cursor: pointer;
  transition-property: transform;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  &:hover {
    transform: scale(1.05);
  }
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
  const [imageActive, setImageActive] = useState(false)

  const handleClickImage = () => {
    setImageActive(prevState => !prevState)
  }

  const newFormArr = form.includes("__") ? form.split("__") : ["", "", form]
  const newMaterialArr = material.includes("__")
    ? material.split("__")
    : ["", "", material]
  const newTypArr = typ.includes("__") ? typ.split("__") : ["", "", typ]
  return (
    <Layout noImage>
      {!!producer && !!model && (
        <SEO
          title={`${producer} - ${model}`}
          description={`${producer} - ${model}`}
        />
      )}
      <section className="container pt-5">
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
            <ClickImageProduct onClick={handleClickImage}>
              <Img fluid={productImage.fluid} />
            </ClickImageProduct>
            <PriceDiv>{price} zł</PriceDiv>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 col-12 mb-4">
            <UperInfo>Opis marki: </UperInfo>
            <StyledAreas>
              <BoldStyle>{newFormArr[1]}</BoldStyle>
              <p>{newFormArr[2]}</p>
            </StyledAreas>
          </div>
          <div className="col-md-6 col-12 mb-4">
            <UperInfo>Opis produktu: </UperInfo>
            <StyledAreas>
              <BoldStyle>{newMaterialArr[1]}</BoldStyle>
              <p>{newMaterialArr[2]}</p>
              <p>{newTypArr[2]}</p>
            </StyledAreas>
          </div>
          {/* <div className="col-md-4 col-12 mb-4">
            <UperInfo>Typ: </UperInfo>
            <StyledAreas>
              <BoldStyle>{newTypArr[1]}</BoldStyle>
            </StyledAreas>
          </div> */}
        </div>
        <CSSTransition
          in={imageActive}
          timeout={300}
          classNames="alert"
          unmountOnExit
        >
          <PositionImage onClick={handleClickImage}>
            <SizeImageClicked>
              <div className="imageWidth">
                <Img fluid={productImage.fluid} />
                <div className="closeButton">
                  <MdClose />
                </div>
              </div>
            </SizeImageClicked>
          </PositionImage>
        </CSSTransition>
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
        fluid(maxWidth: 1000) {
          ...GatsbyContentfulFluid
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
