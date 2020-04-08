import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { Colors } from "../common"

const CustomBackgroundImage = ({ img, className, children, home }) => {
  return (
    <BackgroundImage className={className} fluid={img} home={home}>
      {children}
    </BackgroundImage>
  )
}
export default styled(CustomBackgroundImage)`
  min-height: ${props => (props.home ? "100vh" : "50vh")};
  background: ${props =>
    props.home
      ? `linear-gradient(rgba(${Colors.secondRgb}, 0.7), rgba(0, 0, 0, 0.7))`
      : "none"};
  background-position: center;
  background-size: cover;

  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`
