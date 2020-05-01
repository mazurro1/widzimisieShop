import React from "react"
import { Title, Section } from "../../common"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    contentfulPageAboutUs {
      title
      paragraph {
        paragraph
      }
    }
  }
`

const AboutUs = () => {
  const {
    contentfulPageAboutUs: { paragraph, title },
  } = useStaticQuery(getData)

  return (
    <Section>
      <div className="container">
        <Title>{title}</Title>
        <div className="row">
          <div className="col-12 col-md-10 mx-auto">
            <p>{paragraph.paragraph}</p>
          </div>
        </div>
      </div>
    </Section>
  )
}
export default AboutUs
