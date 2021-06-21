import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const MarginTop = styled.div`
  padding-top: 1px;
`

const StyledIFrame = styled.iframe`
  margin-bottom: 21px;
  width: 100%;
  height: calc(100vh - 117px);
`

const ConsultantPage = props => (
  <Layout history={props.location} noImage>
    <MarginTop>
      <SEO title="Konsultant soczewek okularowych" />
      <StyledIFrame
        id="inlineFrameExample"
        title="Inline Frame Example"
        src="https://www.rodenstock.com/pl/pl/doradcaoptyczny/index.html#/consulting/firstglasses"
      />
    </MarginTop>
  </Layout>
)

export default ConsultantPage
