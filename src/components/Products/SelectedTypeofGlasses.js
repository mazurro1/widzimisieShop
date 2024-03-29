import React from "react"
import styled from "styled-components"
import Button from "@material-ui/core/Button"
import { useStaticQuery, graphql } from "gatsby"
import CustomBackgroundImageSuppliers from "../..//common/CustomBackgroundImageSuppliers"

const newData = graphql`
  {
    contentfulOurProductsImages {
      image1: sunscreenImage {
        fixed(width: 440, height: 200) {
          ...GatsbyContentfulFixed
        }
      }
      image2: correctionImage {
        fixed(width: 440, height: 200) {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`

const PositionAbsolute = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
`
const ElementStyle = styled.div`
  position: relative;
  text-align: center;
  button {
    width: 80%;
    min-height: 200px;
    transition-property: background-color;
    transition-duration: 0.3s;
    transition-timing-function: ease;
  }
`
const TextOnImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.2rem;
  padding: 5px;
  color: white;
  text-align: center;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`

const SelectedTypeofGlasses = ({ type, handleChangeTypeOfGlasses }) => {
  const {
    contentfulOurProductsImages: {
      image1: { fixed: image1Selected },
      image2: { fixed: image2Selected },
    },
  } = useStaticQuery(newData)
  const mapType = type.map((item, index) => {
    return (
      <ElementStyle className="col-md-6 col-12 mx-auto" key={index}>
        <Button onClick={() => handleChangeTypeOfGlasses(item)}>
          <CustomBackgroundImageSuppliers
            fixed
            img={index === 0 ? image1Selected : image2Selected}
          >
            <TextOnImage>{item}</TextOnImage>
          </CustomBackgroundImageSuppliers>
        </Button>
      </ElementStyle>
    )
  })

  return (
    <PositionAbsolute>
      <div className="container mb-5">
        <div className="row">{mapType}</div>
      </div>
    </PositionAbsolute>
  )
}
export default SelectedTypeofGlasses
