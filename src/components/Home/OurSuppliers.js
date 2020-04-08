import React from "react"
import { Title, Section, Colors } from "../../common"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import CustomBackgroundImageSuppliers from "../../common/CustomBackgroundImageSuppliers"

const DivContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: "BigImage BigImage SmallImage1 SmallImage2" "BigImage BigImage SmallImage3 SmallImage4" "SmallImage5 SmallImage6 SmallImage7 SmallImage8";

  @media all and (max-width: 991px) {
    & {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      grid-template-areas: "BigImage BigImage SmallImage1" "BigImage BigImage SmallImage2" "SmallImage3 SmallImage4 SmallImage5" "SmallImage6 SmallImage7 SmallImage8";
    }
  }

  @media all and (max-width: 767px) {
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
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-weight: 700;
  font-size: 1.1rem;
`
const getData = graphql`
  {
    contentfulPages(path: { eq: "ourSuppliers" }) {
      title
      underTitle
      paragraph {
        contentParagraph: paragraph
      }
    }
    contentfulImagesOurSuppliers {
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
        fixed(width: 545, height: 420) {
          ...GatsbyContentfulFixed_tracedSVG
        }
      }
      image2 {
        fixed(width: 263, height: 200) {
          ...GatsbyContentfulFixed_tracedSVG
        }
      }
      image3 {
        fixed(width: 263, height: 200) {
          ...GatsbyContentfulFixed_tracedSVG
        }
      }
      image4 {
        fixed(width: 263, height: 200) {
          ...GatsbyContentfulFixed_tracedSVG
        }
      }
      image5 {
        fixed(width: 263, height: 200) {
          ...GatsbyContentfulFixed_tracedSVG
        }
      }
      image6 {
        fixed(width: 263, height: 200) {
          ...GatsbyContentfulFixed_tracedSVG
        }
      }
      image7 {
        fixed(width: 263, height: 200) {
          ...GatsbyContentfulFixed_tracedSVG
        }
      }
      image8 {
        fixed(width: 263, height: 200) {
          ...GatsbyContentfulFixed_tracedSVG
        }
      }
      image9 {
        fixed(width: 263, height: 200) {
          ...GatsbyContentfulFixed_tracedSVG
        }
      }
    }
  }
`

const SectionColor = styled(Section)`
  background-color: ${Colors.basicLight};
  opacity: 0.99;
`

const OurSuppliers = () => {
  const {
    contentfulImagesOurSuppliers: {
      text1,
      text2,
      text3,
      text4,
      text5,
      text6,
      text7,
      text8,
      text9,
      url1,
      url2,
      url3,
      url4,
      url5,
      url6,
      url7,
      url8,
      url9,
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
    contentfulPages: { paragraph, title, underTitle },
  } = useStaticQuery(getData)
  const handleClickItemList = link => {
    window.open(link, "_blank")
  }
  const underTitleContent = !underTitle ? (
    <p className="text-center text-white">{underTitle}</p>
  ) : null
  const paragraphContent = !paragraph || (
    <p className="text-white">{paragraph.contentParagraph}</p>
  )

  const elements = [
    {
      id: 1,
      text: text1,
      url: url1,
      image: image1,
      big: true,
    },
    {
      id: 2,
      text: text2,
      url: url2,
      image: image2,
      big: false,
    },
    {
      id: 3,
      text: text3,
      url: url3,
      image: image3,
      big: false,
    },
    {
      id: 4,
      text: text4,
      url: url4,
      image: image4,
      big: false,
    },
    {
      id: 5,
      text: text5,
      url: url5,
      image: image5,
      big: false,
    },
    {
      id: 6,
      text: text6,
      url: url6,
      image: image6,
      big: false,
    },
    {
      id: 7,
      text: text7,
      url: url7,
      image: image7,
      big: false,
    },
    {
      id: 8,
      text: text8,
      url: url8,
      image: image8,
      big: false,
    },
    {
      id: 9,
      text: text9,
      url: url9,
      image: image9,
      big: false,
    },
  ]

  const mapElements = elements.map(item => {
    const elem = (
      <CustomBackgroundImageSuppliers
        big={item.big}
        img={item.image.fixed}
        onClick={() => handleClickItemList(item.url)}
        key={item.id}
      >
        <TextPosition>{item.text}</TextPosition>
      </CustomBackgroundImageSuppliers>
    )
    return elem
  })

  return (
    <SectionColor>
      <div className="container">
        <Title dark>{title}</Title>
        {underTitleContent}
        <div className="row">
          <div className="col-12 col-md-10 mx-auto">{paragraphContent}</div>
        </div>
        <DivContainer>{mapElements}</DivContainer>
      </div>
    </SectionColor>
  )
}
export default OurSuppliers
