import React from "react"
import styled from "styled-components"
import Button from "@material-ui/core/Button"
import { Colors } from "../../common"

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
    color: white;
    width: 100%;
    min-height: 200px;
    background-color: ${Colors.basic};
    transition-property: background-color;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    display: block !important;
    &:hover {
      background-color: ${Colors.basicLight};
    }
    p {
      font-size: 0.8rem;
    }
  }
`

const PriceDiv = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: #f44336;
  padding: 5px 10px;
  color: white;
`

const SelectGlasses = ({ handleSelectGlassClick }) => {
  const selectGlasses = [
    {
      title: "Standard",
      content: "Opis",
      price: 0,
    },
    {
      title: "Do 15% cieńsze",
      content: "Opis",
      price: 99,
    },
    {
      title: "Do 25% cieńsze",
      content: "Opis",
      price: 199,
    },
    {
      title: "Do 35% cieńsze",
      content: "Opis",
      price: 259,
    },
  ]
  const mapType = selectGlasses.map((item, index) => {
    return (
      <ElementStyle className="col-md-6 col-12 mx-auto mb-4" key={index}>
        <Button onClick={() => handleSelectGlassClick(item)}>
          <h3 className="mt-2">{item.title}</h3>
          <p className="text-lowercase">{item.content}</p>
          <PriceDiv>{item.price} zł</PriceDiv>
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
export default SelectGlasses
