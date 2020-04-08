import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const CustomBackgroundImageParalaks = ({ img, className, children }) => {
  return (
    <BackgroundImage className={className} fluid={img}>
      {children}
    </BackgroundImage>
  )
}
export default styled(CustomBackgroundImageParalaks)`
  background-attachment: fixed;
  background-position: 50% 0;
  background-repeat: no-repeat;
  background-size: cover;
  height: 20vh;
  max-height: 300px;
  min-height: 200px;
`
