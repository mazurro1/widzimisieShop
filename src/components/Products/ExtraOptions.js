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

const ExtraOptions = ({ handleExtraOptionClick, selectionPrice }) => {
  const extraOptions = [
    {
      id: 1,
      title: "Łatwiej czyszczące",
      content: "Opis",
      priceBasic: 60,
      priceSecond: 60,
      priceThird: 60,
    },
    {
      id: 2,
      title: "Super czyszczące, dodatkowo utwardzone",
      content: "Opis",
      priceBasic: 150,
      priceSecond: 200,
      priceThird: 200,
    },
    {
      id: 3,
      title: "Fotochromowe",
      content: "Opis",
      priceBasic: 150,
      priceSecond: 250,
      priceThird: 450,
    },
    {
      id: 4,
      title: "Super czyszczące, dodatkowo utwardzone, fotochromowe",
      content: "Opis",
      priceBasic: 250,
      priceSecond: 350,
      priceThird: 450,
    },
    {
      id: 5,
      title: "Filtr do komputera, super czyszczące, dodatkowo utwardzone",
      content: "Opis",
      priceBasic: 299,
      priceSecond: 150,
      priceThird: 150,
    },

    {
      id: 6,
      title: "Przeciwsłoneczne",
      content: "Opis",
      priceBasic: 99,
      priceSecond: 150,
      priceThird: 150,
    },
  ]

  const newExtraOption = [
    {
      id: 7,
      title: "Specjalny filtr dla kierowców z certyfikatem TUV",
      content: "Opis",
      priceBasic: 0,
      priceSecond: 400,
      priceThird: 200,
    },
  ]

  const mapType = extraOptions.map((item, index) => {
    return (
      <ElementStyle className="col-md-6 col-12 mx-auto mb-4" key={index}>
        <Button onClick={() => handleExtraOptionClick(item)}>
          <h3 className="mt-2">{item.title}</h3>
          <p className="text-lowercase">{item.content}</p>
          <PriceDiv>{item[selectionPrice]} zł</PriceDiv>
        </Button>
      </ElementStyle>
    )
  })

  const mapExtraType =
    selectionPrice === "priceSecond" || selectionPrice === "priceThird"
      ? newExtraOption.map((item, index) => {
          return (
            <ElementStyle className="col-md-6 col-12 mx-auto mb-4" key={index}>
              <Button onClick={() => handleExtraOptionClick(item)}>
                <h3 className="mt-2">{item.title}</h3>
                <p className="text-lowercase">{item.content}</p>
                <PriceDiv>{item[selectionPrice]} zł</PriceDiv>
              </Button>
            </ElementStyle>
          )
        })
      : null

  return (
    <PositionAbsolute>
      <div className="container mb-5">
        <div className="row">
          {mapType}
          {mapExtraType}
        </div>
      </div>
    </PositionAbsolute>
  )
}
export default ExtraOptions
