import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./bootstrap.min.css"
import Header from "./header"
import Footer from "./Footer"
import styled from "styled-components"
import Typed from "react-typed"
import { Colors } from "../common"
import Navigation from "./Navigation"
import "./layout.css"

import MessengerCustomerChat from "react-messenger-customer-chat"

const getData = graphql`
  {
    file(name: { eq: "792-scaled" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
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

const Layout = ({
  children,
  history = "",
  image,
  home = false,
  headerText,
}) => {
  const data = useStaticQuery(getData)
  const imageToHeader = image ? image : data.file.childImageSharp.fluid
  const headerTextTyped = !home || (
    <>
      <TextStyled>
        <div>
          <Typed
            strings={[headerText ? headerText.text1 : ""]}
            typeSpeed={40}
          ></Typed>
        </div>
        <TextStyledOneLine>
          <Typed
            strings={[headerText ? headerText.text2 : ""]}
            typeSpeed={20}
            startDelay={2500}
            showCursor={false}
          ></Typed>
        </TextStyledOneLine>
      </TextStyled>
    </>
  )
  return (
    <>
      <Navigation history={history} />
      <header>
        <Header image={imageToHeader} home={home}>
          {headerTextTyped}
        </Header>
      </header>
      {children}
      <div>
        <MessengerCustomerChat
          pageId="109616830550928"
          appId="224093935318863"
        />
      </div>
      <Footer />
    </>
  )
}

export default Layout
