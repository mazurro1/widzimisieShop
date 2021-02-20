import React from "react"
import styled from "styled-components"
import { Colors } from "../common"

const FooterStyle = styled.footer`
  font-size: 0.8rem;
  text-align: center;
  background-color: ${Colors.basicDark};
  color: ${Colors.textBasic};
  padding: 5px 0;
  z-index: 200;
`

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <></>
    // <FooterStyle>
    //   &copy; {date} Widzimisie | Wszelkie prawa zastrzeżone.
    // </FooterStyle>
  )
}
export default Footer
