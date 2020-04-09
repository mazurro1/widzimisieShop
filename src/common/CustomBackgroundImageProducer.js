import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const CustomBackgroundImageProducer = ({ img, className, children }) => {
  return (
    <BackgroundImage className={className} fluid={img}>
      {children}
    </BackgroundImage>
  )
}
export default styled(CustomBackgroundImageProducer)`
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;
`
