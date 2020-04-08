import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const CustomBackgroundImageServices = ({ img, className, children }) => {
  return (
    <BackgroundImage className={className} fluid={img}>
      {children}
    </BackgroundImage>
  )
}
export default styled(CustomBackgroundImageServices)`
  background-repeat: no-repeat;
  background-size: cover;
  max-height: 50vh;
`
