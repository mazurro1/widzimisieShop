import React from "react"
import { Title, Section } from "../../common"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Colors } from "../../common"

const getData = graphql`
  {
    contentfulPageMeetUs {
      title
      paragraph {
        paragraph
      }
    }
  }
`

const SectionColor = styled(Section)`
  background-color: ${Colors.basicDark};
`

const MeetUs = () => {
  const {
    contentfulPageMeetUs: { title, paragraph },
  } = useStaticQuery(getData)

  return (
    <SectionColor>
      <div className="container" data-sal="slide-left" data-sal-duration="1000">
        <Title width="500" dark>
          {title}
        </Title>
        <div className="row">
          <div className="col-12 col-md-10 mx-auto">
            <p className="text-white">{paragraph.paragraph}</p>
          </div>
        </div>
      </div>
    </SectionColor>
  )
}
export default MeetUs
