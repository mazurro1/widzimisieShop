import React from "react"
import { Title, Section, Colors, AniLinkCustom } from "../../common"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import CustomBackgroundImageSuppliersCustom from "../../common/CustomBackgroundImageSuppliersCustom"

const DivContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: "BigImage BigImage SmallImage1 SmallImage2" "BigImage BigImage SmallImage3 SmallImage4" "SmallImage5 SmallImage6 SmallImage7 SmallImage8";

  @media all and (max-width: 1199px) {
    & {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      grid-template-areas: "BigImage BigImage SmallImage1" "BigImage BigImage SmallImage2" "SmallImage3 SmallImage4 SmallImage5" "SmallImage6 SmallImage7 SmallImage8";
    }
  }

  @media all and (max-width: 991px) {
    & {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
      grid-template-areas: "BigImage BigImage" "BigImage BigImage" "SmallImage1 SmallImage2" "SmallImage3 SmallImage4" "SmallImage5 SmallImage6" "SmallImage7 SmallImage8";
    }
  }

  @media all and (max-width: 576px) {
    & {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-template-areas: "BigImage" "BigImage" "SmallImage1" "SmallImage2" "SmallImage3" "SmallImage4" "SmallImage5" "SmallImage6" "SmallImage7" "SmallImage8";
    }
  }

  .SmallImage1 {
    grid-area: SmallImage1;
  }

  .SmallImage2 {
    grid-area: SmallImage2;
  }

  .SmallImage3 {
    grid-area: SmallImage3;
  }

  .SmallImage4 {
    grid-area: SmallImage4;
  }

  .SmallImage5 {
    grid-area: SmallImage5;
  }

  .SmallImage6 {
    grid-area: SmallImage6;
  }

  .SmallImage7 {
    grid-area: SmallImage7;
  }

  .SmallImage8 {
    grid-area: SmallImage8;
  }
`
const TextPosition = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  text-align: center;
  font-weight: 500;
  font-size: 1.2rem;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  color: white;
  padding: 10px 0;
`

const ToLinkUper = styled.div`
  position: absolute;
  top: 0%;
  height: 100%;
  width: 100%;
  z-index: 100;
  a {
    position: absolute;
    top: 0%;
    height: 100%;
    width: 100%;
  }
`

const GridItem = styled.div`
  grid-area: ${props => (props.big ? "BigImage" : "")};
`

const getData = graphql`
  {
    contentfulPageOurSuppliers {
      title
      paragraph {
        paragraph
      }
      text1
      text2
      text3
      text4
      text5
      text6
      text7
      text8
      text9
      url1
      url2
      url3
      url4
      url5
      url6
      url7
      url8
      url9
      image1 {
        fluid(maxWidth: 350) {
          ...GatsbyContentfulFluid
        }
      }
      image2 {
        fluid(maxWidth: 350) {
          ...GatsbyContentfulFluid
        }
      }
      image3 {
        fluid(maxWidth: 350) {
          ...GatsbyContentfulFluid
        }
      }
      image4 {
        fluid(maxWidth: 350) {
          ...GatsbyContentfulFluid
        }
      }
      image5 {
        fluid(maxWidth: 350) {
          ...GatsbyContentfulFluid
        }
      }
      image6 {
        fluid(maxWidth: 350) {
          ...GatsbyContentfulFluid
        }
      }
      image7 {
        fluid(maxWidth: 350) {
          ...GatsbyContentfulFluid
        }
      }
      image8 {
        fluid(maxWidth: 350) {
          ...GatsbyContentfulFluid
        }
      }
      image9 {
        fluid(maxWidth: 350) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

const SectionColor = styled(Section)`
  /* background-color: ${Colors.basicLight}; */
  opacity: 0.99;
`

const OurSuppliers = () => {
  const {
    contentfulPageOurSuppliers: {
      title,
      paragraph,
      text1,
      text2,
      text3,
      text4,
      text5,
      text6,
      text7,
      text8,
      text9,
      url2,
      url3,
      url4,
      url5,
      url6,
      url8,
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
    },
  } = useStaticQuery(getData)

  const elements = [
    {
      id: 1,
      text: text1,
      url: false,
      dataToSite: {
        typeOfGlasses: "Korekcyjne",
      },
      image: image1,
      big: true,
    },
    {
      id: 2,
      text: text2,
      url: url2,
      dataToSite: {},
      image: image2,
      big: false,
    },
    {
      id: 3,
      text: text3,
      url: url3,
      dataToSite: {},
      image: image3,
      big: false,
    },
    {
      id: 4,
      text: text4,
      url: url4,
      dataToSite: {},
      image: image4,
      big: false,
    },
    {
      id: 5,
      text: text5,
      url: url5,
      dataToSite: {},
      image: image5,
      big: false,
    },
    {
      id: 6,
      text: text9,
      url: false,
      dataToSite: {
        typeOfGlasses: "Przeciwsłoneczne",
      },
      image: image9,
      big: false,
    },

    {
      id: 7,
      text: text7,
      url: false,
      dataToSite: {
        sex: "Dziecięce",
      },
      image: image7,
      big: false,
    },
    {
      id: 8,
      text: text8,
      url: url8,
      dataToSite: {},
      image: image8,
      big: false,
    },
    {
      id: 9,
      text: text6,
      url: url6,
      dataToSite: {},
      image: image6,
      big: false,
    },
  ]

  const mapElements = elements.map((item, index) => {
    const elem = (
      <GridItem big={item.big} key={index}>
        <CustomBackgroundImageSuppliersCustom
          big={item.big}
          img={item.image.fluid}
          key={index}
        >
          <TextPosition>{item.text}</TextPosition>
          <ToLinkUper>
            {item.url ? (
              <AniLinkCustom to={`/sites/${index + 1}`}></AniLinkCustom>
            ) : (
              <Link to="/shop" state={item.dataToSite}></Link>
            )}
          </ToLinkUper>
        </CustomBackgroundImageSuppliersCustom>
        {/* <PositionTextElement>{item.text}</PositionTextElement> */}
      </GridItem>
    )
    return elem
  })

  return (
    <SectionColor>
      <div className="container d-none d-md-block">
        <Title dark>{title}</Title>
        <div className="row">
          <div className="col-12 col-md-10 mx-auto">
            <p>{paragraph.paragraph}</p>
          </div>
        </div>
        <DivContainer>{mapElements}</DivContainer>
      </div>
      <div className="container d-md-none">
        <Title dark>{title}</Title>
        <div className="row">
          <div className="col-12 col-md-10 mx-auto">
            <p>{paragraph.paragraph}</p>
          </div>
        </div>
        <DivContainer>{mapElements}</DivContainer>
      </div>
    </SectionColor>
  )
}
export default OurSuppliers
