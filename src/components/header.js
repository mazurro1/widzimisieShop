import React from "react"
import CustomBackgroundImage from "../common/CustomBackgroundImage"

const Header = ({ image, children, home }) => {
  return (
    <CustomBackgroundImage home={home} img={image}>
      {children}
    </CustomBackgroundImage>
  )
}
export default Header
