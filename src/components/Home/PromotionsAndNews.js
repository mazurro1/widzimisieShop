import React from "react"
import styled from "styled-components"
import { Title, Section, Colors } from "../../common"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    contentfulPageNews {
      title
      underTitle
    }

    allContentfulNewsAndPromotions {
      nodes {
        title
        content {
          content
        }
      }
    }
  }
`

const SectionColor = styled(Section)`
  /* background-color: ${Colors.basicDark}; */
`

const NewsItem = styled.div`
  .title {
    font-size: 1.2rem;
    font-weight: bold;
    display: inline-block;
    border-bottom: 2px solid ${Colors.second};
  }

  p {
    margin-top: 20px;
    font-size: 1rem;
  }

  .borderItemNews {
    box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.2);
    padding: 10px;
    border-radius: 5px;
  }
`

const PromotionsAndNews = () => {
  const {
    contentfulPageNews: { title, underTitle },
    allContentfulNewsAndPromotions: allContentfulNewsAndPromotions,
  } = useStaticQuery(getData)

  const mapNews = allContentfulNewsAndPromotions.nodes.map((item, index) => {
    return (
      <div className="col-12 col-md-6 mx-auto mb-4" key={index}>
        <NewsItem>
          <div className="borderItemNews">
            <div className="title">{item.title}</div>
            <p>{item.content.content}</p>
          </div>
        </NewsItem>
      </div>
    )
  })

  return (
    <SectionColor>
      <div className="container">
        <Title width={500}>{title}</Title>
        <p className="text-center">{underTitle}</p>
        <div className="row">{mapNews}</div>
      </div>
    </SectionColor>
  )
}

export default PromotionsAndNews
