import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

const StyledIFrame = styled.iframe`
  margin-top: 88px;
  margin-bottom: 21px;
  width: 100%;
  height: calc(100vh - 117px);
`

const sitesTemplate = props => {
  const allUrlsInArr = Object.values(props.data.urls)
  const selectPath = allUrlsInArr.filter(
    (_, index) => index === props.pageContext.title
  )
  return (
    <div>
      <StyledIFrame
        id="inlineFrameExample"
        title="Inline Frame Example"
        src={selectPath}
      />
    </div>
  )
}

export const query = graphql`
  query {
    urls: contentfulPageOurSuppliers {
      url1
      url2
      url3
      url4
      url5
      url6
      url7
      url8
      url9
    }
  }
`

export default sitesTemplate
