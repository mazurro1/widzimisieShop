import React from "react"
import { Title, Section } from "../../common"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    contentfulPages(path: { eq: "aboutUs" }) {
      title
      underTitle
      paragraph {
        contentParagraph: paragraph
      }
    }
  }
`

const AboutUs = () => {
  const {
    contentfulPages: { paragraph, title, underTitle },
  } = useStaticQuery(getData)
  const underTitleContent = !underTitle ? (
    <p className="text-center">{underTitle}</p>
  ) : null
  const paragraphContent = !paragraph || <p>{paragraph.contentParagraph}</p>
  return (
    <Section>
      <div className="container">
        <Title>{title}</Title>
        {underTitleContent}
        <div className="row">
          <div className="col-12 col-md-10 mx-auto">{paragraphContent}</div>
        </div>
      </div>
    </Section>
  )
}
export default AboutUs
