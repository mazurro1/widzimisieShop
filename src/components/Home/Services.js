import styled from "styled-components"
import React from "react"
import { Title, Section } from "../../common"
import { useStaticQuery, graphql } from "gatsby"
import CustomBackgroundImageServices from "../../common/CustomBackgroundImageServices"
import { Colors } from "../../common/consts"

const StyledCustomBackgroundImageServices = styled(CustomBackgroundImageServices)`
  min-height: 320px;
`

const FlexBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

const ItemFlexBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

const ItemItemFlexBox = styled.div`
  width: 50%;
  min-height: 300px;
  @media all and (max-width: 768px) {
    & {
      width: 100%;
    }
  }
`

const ItemItemFlexBoxImage = styled.div`
  width: 50%;
  min-height: 300px;
  @media all and (max-width: 768px) {
    & {
      display: none;
    }
  }
`

const DivColor = styled.div`
  /* background-color: #27211e; */
  padding: 10px 0;
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
            ...GatsbyContentfulFluid
          }
        }
        title
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
        <ItemFlexBox key={index}>
          <ItemItemFlexBox>
            <TextDiv>
              <TextH2>{item.title}</TextH2>
              <p>{item.paragraph.paragraph}</p>
            </TextDiv>
          </ItemItemFlexBox>
          <ItemItemFlexBoxImage>
            <StyledCustomBackgroundImageServices img={item.image.fluid} />
          </ItemItemFlexBoxImage>
        </ItemFlexBox>
      ) : (
        <ItemFlexBox key={index}>
          <ItemItemFlexBoxImage>
            <StyledCustomBackgroundImageServices
              key={index}
              img={item.image.fluid}
            />
          </ItemItemFlexBoxImage>
          <ItemItemFlexBox>
            <TextDiv>
              <TextH2>{item.title}</TextH2>
              <p>{item.paragraph.paragraph}</p>
            </TextDiv>
          </ItemItemFlexBox>
        </ItemFlexBox>
      )
    return renderItemClass
  })

  return (
    <Section>
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
          {/* <GridContainer>{mapContentServices}</GridContainer> */}
          <FlexBoxContainer>{mapContentServices}</FlexBoxContainer>
        </div>
      </div>
    </Section>
  )
}

export default AboutUs
