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
    contentfulPageServices {
      title
      underTitle
    }

    allContentfulPageServicesContent {
      nodes {
        image {
          fluid(maxWidth: 1000) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
        title
        underTitle
        paragraph {
          paragraph
        }
      }
    }
  }
`

const AboutUs = () => {
  const {
    contentfulPageServices: { title: titleUp, underTitle: underTitleUp },
    allContentfulPageServicesContent: { nodes: contentItemsServices },
  } = useStaticQuery(getData)

  const mapContentServices = contentItemsServices.map((item, index) => {
    const renderItemClass =
      index % 2 === 0 ? (
        <React.Fragment key={index}>
          <CustomBackgroundImageServices
            img={item.image.fluid}
            className="Area1 d-md-block d-none"
          />
          <TextDiv className="Area2">
            <TextH2>{item.title}</TextH2>
            <TextH3>{item.underTitle}</TextH3>
            <p>{item.paragraph.paragraph}</p>
          </TextDiv>
        </React.Fragment>
      ) : (
        <React.Fragment key={index}>
          <CustomBackgroundImageServices
            key={index}
            img={item.image.fluid}
            className="Area4 d-md-block d-none"
          />
          <TextDiv className="Area3">
            <TextH2>{item.title}</TextH2>
            <TextH3>{item.underTitle}</TextH3>
            <p>{item.paragraph.paragraph}</p>
          </TextDiv>
        </React.Fragment>
      )
    return renderItemClass
  })

  return (
    <Section data-sal="zoom-in" data-sal-duration="1000">
      <DivColor>
        <div className="container">
          <Title width="400">{titleUp}</Title>
          <p className="text-center">{underTitleUp}</p>
          <div className="row">
            <div className="col-12 col-md-10 mx-auto"></div>
          </div>
        </div>
      </DivColor>
      <div>
        <div className="jumbotron-fluid">
          <GridContainer>{mapContentServices}</GridContainer>
        </div>
      </div>
    </Section>
  )
}

export default AboutUs
