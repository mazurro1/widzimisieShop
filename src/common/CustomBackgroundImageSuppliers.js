import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const CustomBackgroundImageSuppliers = ({
  img,
  className,
  children,
  big,
  onClick,
  fixed = false,
}) => {
  const propFluid = !fixed
    ? {
        fluid: img,
      }
    : {
        fixed: img,
      }
  return (
    <BackgroundImage
      className={className}
      {...propFluid}
      big={big}
      onClick={onClick}
    >
      {children}
    </BackgroundImage>
  )
}
export default styled(CustomBackgroundImageSuppliers)`
  position: relative;
  min-height: ${props => (props.big ? "400px" : "200px")};
  grid-area: ${props => (props.big ? "BigImage" : "")};
  /* margin: 0 auto; */
  width: 100%;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition-property: transform;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  &:hover {
    transform: scale(1.05);
  }
`
