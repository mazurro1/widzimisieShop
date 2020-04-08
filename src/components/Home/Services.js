import styled from "styled-components"
import React from "react"
import { Title, Section } from "../../common"
import { useStaticQuery, graphql } from "gatsby"
import CustomBackgroundImageServices from "../../common/CustomBackgroundImageServices"
import { Colors } from "../../common"

const DivColor = styled.div`
  /* background-color: #27211e; */
  padding: 10px 0;
`

const GridContainer = styled.div`
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "Area1 Area2" "Area3 Area4";

  @media all and (max-width: 768px) {
    & {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
      grid-template-areas: "Area1" "Area2" "Area4" "Area3";
    }
  }
  @media all and (min-width: 769px) {
    & {
      display: grid;
    }
  }

  .Area1 {
    grid-area: Area1;
  }

  .Area2 {
    grid-area: Area2;
  }

  .Area3 {
    grid-area: Area3;
  }

  .Area4 {
    grid-area: Area4;
  }
`

const TextDiv = styled.div`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  padding: 10px 50px;
  color: #66615f;
  font-weight: 300;
`

const TextH2 = styled.h2`
  color: ${Colors.secondDark};
  margin: 30px 0;
  font-size: 1.2rem;
  font-weight: 400;
`

const TextH3 = styled.h3`
  color: rgb(39, 33, 30);
  margin: 30px 0;
  font-size: 1rem;
  font-weight: 400;
`

const getData = graphql`
  {
    contentfulPages(path: { eq: "services" }) {
      title
      underTitle
      paragraph {
        contentParagraph: paragraph
      }
    }
    contentfulImagesTextProfessionalServices {
      title
      title2
      underTitle
      underTitl2
      paragraph {
        paragraph
      }
      paragraph2 {
        paragraph2
      }
      image1 {
        fluid(maxWidth: 1000) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      image2 {
        fluid(maxWidth: 1000) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`

const AboutUs = () => {
  const {
    contentfulImagesTextProfessionalServices: {
      title,
      title2,
      underTitle,
      underTitl2,
      paragraph,
      paragraph2,
      image1,
      image2,
    },
    contentfulPages: {
      paragraph: paragraphUp,
      title: titleUp,
      underTitle: underTitleUp,
    },
  } = useStaticQuery(getData)
  const underTitleContent = !underTitleUp ? (
    <p className="text-center">{underTitleUp}</p>
  ) : null
  const paragraphContent = !paragraphUp || <p>{paragraphUp.contentParagraph}</p>
  const paragraphContentUnder1 = !paragraph || <p>{paragraph.paragraph}</p>
  const paragraphContentUnder2 = !paragraph2 || <p>{paragraph2.paragraph2}</p>
  const titleContentUnder1 = !title || <TextH2>{title}</TextH2>
  const titleContentUnder2 = !title2 || <TextH2>{title2}</TextH2>
  const underTitleContentUnder1 = !underTitle || <TextH3>{underTitle}</TextH3>
  const underTitleContentUnder2 = !underTitl2 || <TextH3>{underTitl2}</TextH3>
  return (
    <Section>
      <DivColor>
        <div className="container">
          <Title width="400">{titleUp}</Title>
          {underTitleContent}
          <div className="row">
            <div className="col-12 col-md-10 mx-auto">{paragraphContent}</div>
          </div>
        </div>
      </DivColor>
      <div>
        <div className="jumbotron-fluid">
          <GridContainer>
            <CustomBackgroundImageServices
              img={image1.fluid}
              className="Area1 d-md-block d-none"
            />
            <TextDiv className="Area2">
              {titleContentUnder1}
              {underTitleContentUnder1}
              {paragraphContentUnder1}
            </TextDiv>
            <TextDiv className="Area3">
              {titleContentUnder2}
              {underTitleContentUnder2}
              {paragraphContentUnder2}
            </TextDiv>
            <CustomBackgroundImageServices
              img={image2.fluid}
              className="Area4 d-md-block d-none"
            />
          </GridContainer>
        </div>
      </div>
    </Section>
  )
}

export default AboutUs
