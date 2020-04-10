import React from "react"
import styled from "styled-components"
import Button from "@material-ui/core/Button"
import { useStaticQuery, graphql } from "gatsby"
import CustomBackgroundImageSuppliers from "../..//common/CustomBackgroundImageSuppliers"

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

const SelectGlasses = () => {
  const selectGlasses = [
    {
      title: "Standard",
      content: "Opis",
      price: 200,
    },
    {
      title: "20% cieńsze",
      content: "Opis",
      price: 231,
    },
    {
      title: "25% cieńsze",
      content: "Opis",
      price: 2567,
    },
    {
      title: "30% cieńsze",
      content: "Opis",
      price: 31,
    },
  ]
  const mapType = selectGlasses.map((item, index) => {
    return (
      <ElementStyle className="col-md-6 col-12 mx-auto" key={index}>
        <div>{item.title}</div>
        <div>{item.content}</div>
        <div>{item.price} zł</div>
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
export default SelectGlasses
