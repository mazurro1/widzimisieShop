import React from "react"
import styled from "styled-components"
import Button from "@material-ui/core/Button"
import { useStaticQuery, graphql } from "gatsby"
import CustomBackgroundImageSuppliers from "../..//common/CustomBackgroundImageSuppliers"

const newData = graphql`
  {
    image1: file(name: { eq: "gatsby-astronaut" }) {
      childImageSharp {
        fixed(width: 440, height: 200) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    image2: file(name: { eq: "gatsby-astronaut" }) {
      childImageSharp {
        fixed(width: 440, height: 200) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    image3: file(name: { eq: "gatsby-astronaut" }) {
      childImageSharp {
        fixed(width: 440, height: 200) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`

const PositionAbsolute = styled.div`
  position: absolute;
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

const SelectedTypeofSex = ({ type, handleChangeTypeOfSex }) => {
  const {
    image1: {
      childImageSharp: { fixed: image1Selected },
    },
    image2: {
      childImageSharp: { fixed: image2Selected },
    },
    image3: {
      childImageSharp: { fixed: image3Selected },
    },
  } = useStaticQuery(newData)
  const mapType = type.map((item, index) => {
    return (
      <ElementStyle className="col-md-6 col-10 mx-auto" key={index}>
        <Button onClick={() => handleChangeTypeOfSex(item)}>
          <CustomBackgroundImageSuppliers
            img={
              index === 0
                ? image1Selected
                : index === 1
                ? image2Selected
                : image3Selected
            }
          >
            <TextOnImage>{item}</TextOnImage>
          </CustomBackgroundImageSuppliers>
        </Button>
      </ElementStyle>
    )
  })

  return (
    <PositionAbsolute>
      <div className="container">
        <div className="row">{mapType}</div>
      </div>
    </PositionAbsolute>
  )
}
export default SelectedTypeofSex
