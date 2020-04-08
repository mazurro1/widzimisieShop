import React from "react"
import styled from "styled-components"

const PositionAbsolute = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`
const ProductList = ({ products }) => {
  const mapProducts = products.map((item, index) => {
    return (
      <div className="col-3 mx-auto" key={index}>
        {item.model}
      </div>
    )
  })
  return (
    <PositionAbsolute>
      <div className="container">
        <div className="row">{mapProducts}</div>
      </div>
    </PositionAbsolute>
  )
}
export default ProductList
