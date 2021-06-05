import React from "react"
import styled from "styled-components"
import { Title, Section, Colors } from "../../common"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

const getData = graphql`
  {
    contentfulPageNews {
      title
      underTitle
    }

    allContentfulNewsAndPromotions {
      nodes {
        title
        contentText {
          json
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
    const options = {
      renderNode: {
        [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
        [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
        [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
        [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
        [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
        [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
        [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
        [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
          <img src={`https:${node.data.target.fields.file["en-US"].url}`} />
        ),
      },
      renderMark: {},
    }
    return (
      <div className="col-12 col-md-6 mx-auto mb-4" key={index}>
        <NewsItem>
          <div className="borderItemNews">
            <div>
              {documentToReactComponents(item.contentText.json, options)}
            </div>
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
