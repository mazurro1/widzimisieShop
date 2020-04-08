import React from "react"
import styled from "styled-components"

const PositionAbsolute = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`
const SelectedTypeofGlasses = ({ type, handleChangeTypeOfGlasses }) => {
  const mapType = type.map((item, index) => {
    return (
      <div
        className="col-6 mx-auto"
        key={index}
        onClick={() => handleChangeTypeOfGlasses(item)}
      >
        {item}
      </div>
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
export default SelectedTypeofGlasses
