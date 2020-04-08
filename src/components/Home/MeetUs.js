import React from "react"
import { Title, Section } from "../../common"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Colors } from "../../common"

const getData = graphql`
  {
    contentfulPages(path: { eq: "meetUs" }) {
      title
      underTitle
      paragraph {
        contentParagraph: paragraph
      }
    }
  }
`

const SectionColor = styled(Section)`
  background-color: ${Colors.basicDark};
`

const MeetUs = () => {
  const {
    contentfulPages: { title, underTitle, paragraph },
  } = useStaticQuery(getData)
  const underTitleContent = !underTitle ? (
    <p className="text-center text-white">{underTitle}</p>
  ) : null
  const paragraphContent = !paragraph || (
    <p className="text-white">{paragraph.contentParagraph}</p>
  )
  return (
    <SectionColor>
      <div className="container">
        <Title width="500" dark>
          {title}
        </Title>
        {underTitleContent}
        <div className="row">
          <div className="col-12 col-md-10 mx-auto">{paragraphContent}</div>
        </div>
      </div>
    </SectionColor>
  )
}
export default MeetUs
