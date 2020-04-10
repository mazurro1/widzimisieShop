import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { Colors } from "../common"

const CustomBackgroundImageProductItem = ({
  img,
  className,
  children,
  big,
  onClick,
}) => {
  return (
    <BackgroundImage
      className={className}
      fixed={img}
      big={big}
      onClick={onClick}
    >
      {children}
    </BackgroundImage>
  )
}
export default styled(CustomBackgroundImageProductItem)`
  position: relative;
  max-width: 258px;
  height: 250px;
  opacity: 0.99 !important;
  cursor: pointer;
`
