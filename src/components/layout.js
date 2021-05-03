import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./bootstrap.min.css"
import Header from "./header"
import styled from "styled-components"
import Typed from "react-typed"
import { Colors } from "../common"
import "./layout.css"
import { AniLinkCustom } from "../common/AniLinkCustom"

import MessengerCustomerChat from "react-messenger-customer-chat"

const getData = graphql`
  {
    file(name: { eq: "792-scaled" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const TextStyled = styled.div`
  position: absolute;
  width: 400px;
  max-width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: ${Colors.headerText};
`

const TextStyledOneLine = styled.div`
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  font-style: normal;
`

const NoImageStyle = styled.div`
  margin-top: 180px;
`

const Layout = ({
  children,
  history = "",
  image,
  home = false,
  headerText,
  noImage = false,
}) => {
  const data = useStaticQuery(getData)
  const imageToHeader = image ? image : data.file.childImageSharp.fluid

  return (
    <>
      {noImage ? (
        <NoImageStyle />
      ) : (
        <header>
          <Header imageHeader={imageToHeader} home={home}></Header>
        </header>
      )}
      {children}
      <div>
        <MessengerCustomerChat
          pageId="109616830550928"
          appId="224093935318863"
        />
      </div>
    </>
  )
}

export default Layout
