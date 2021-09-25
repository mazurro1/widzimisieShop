import React, { useState, useEffect } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styled from "styled-components"
import { Title, Colors } from "../../common"
import Img from "gatsby-image"
import Button from "@material-ui/core/Button"
import { FaHeart, FaRegHeart } from "react-icons/fa"

const PositionItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const FavIcon = styled.div`
  position: absolute;
  top: 0px;
  right: 10px;
  font-size: 2rem;
  cursor: pointer;
  svg {
    color: ${props => (props.isInFavourite ? "#e53935" : "white")};
  }
`

const FavIconProduct = styled.span`
  font-size: 1.2rem;
  cursor: pointer;
  padding: 5px;
  svg {
    color: ${props => (props.isInFavourite ? "#e53935" : "black")};
  }
`

const ProductItem = styled.div`
  padding: 20px 10px;
`
const FlipBox = styled.div`
  .flip-box {
    background-color: transparent;
    width: 380px;
    height: 300px;
    perspective: 1000px;
    margin: 0 auto;
  }

  .flip-box-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-box:hover .flip-box-inner {
    transform: rotateY(180deg);
  }

  .flip-box-front,
  .flip-box-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-box-front {
    display: flex;
    color: black;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.05);
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }

  .flip-box-back {
    background-color: ${Colors.basicDark};
    color: white;
    transform: rotateY(180deg);
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.05);
  }
`

const ImageStyle = styled(Img)`
  border-bottom: 2px solid white;
  height: 175px;
  width: 100%;
`

const PriceStyle = styled.div`
  padding: 5px 10px;
  font-size: 1.8rem;
  font-family: "optima-light" !important;
`

const ProducerStyleBack = styled.div`
  padding: 5px 10px;
  font-family: "optima-regular" !important;
  letter-spacing: 0.5rem;
  margin-bottom: 20px;
  font-size: 1.6rem;
`

const ProducerStyle = styled.div`
  padding: 5px 10px;
  font-family: "optima-regular" !important;
  letter-spacing: 0.5rem;
  font-size: 1.2rem;
  margin-top: 5px;
`

const ProductStyle = styled.div`
  padding: 0px 10px;
  padding-top: 5px;
  font-size: 1rem;
  letter-spacing: 0.1rem;
`

const LogoProducerPositioin = styled.div`
  text-align: center;
  .gatsby-image-wrapper {
    max-width: 100%;
  }
`

const ButtonStyle = styled.div`
  button {
    background-color: ${props =>
      props.second ? Colors.basicLight : Colors.secondDark} !important;
    color: ${props => (props.second ? "white" : Colors.basicDark)};
    transition-property: background-color, transform;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    margin: 5px;
    &:hover {
      transform: scale(1.1);
      background-color: ${props =>
        props.second ? Colors.basic : Colors.secondDark};
    }
  }
`

const BackStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
`

const ProductListProducer = ({
  producerItems,
  handleAddProduct,
  location,
  selectItem = true,
  logo,
  localStoreFav,
  handleAddFav,
}) => {
  const { producer } = producerItems[0]

  const mapProducts = producerItems.map((item, index) => {
    const isInFavourite = localStoreFav.some(itemStore => {
      return itemStore.model === `${item.producer}-${item.model}`
    })
    return (
      <ProductItem key={index}>
        <FlipBox>
          <div className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <ImageStyle fluid={item.productImage.fluid} />
                <div>
                  <ProducerStyle>{item.producer}</ProducerStyle>
                  <ProductStyle>
                    {item.model}
                    {isInFavourite && (
                      <FavIconProduct
                        isInFavourite={isInFavourite}
                        onClick={() =>
                          handleAddFav(`${item.producer}-${item.model}`)
                        }
                      >
                        {isInFavourite ? <FaHeart /> : <FaRegHeart />}
                      </FavIconProduct>
                    )}
                  </ProductStyle>
                  <PriceStyle>{item.price} zł</PriceStyle>
                </div>
              </div>
              <div className="flip-box-back">
                <FavIcon
                  isInFavourite={isInFavourite}
                  onClick={() => handleAddFav(`${item.producer}-${item.model}`)}
                >
                  {isInFavourite ? <FaHeart /> : <FaRegHeart />}
                </FavIcon>
                <BackStyle>
                  <ProducerStyleBack>{item.producer}</ProducerStyleBack>
                  <ButtonStyle second>
                    <a
                      href={`${location}/products/${item.producer.toLowerCase()}-${item.model.toLowerCase()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button>Dowiedz się więcej</Button>
                    </a>
                  </ButtonStyle>
                  {selectItem && (
                    <ButtonStyle>
                      <Button onClick={() => handleAddProduct(item)}>
                        Wybierz
                      </Button>
                    </ButtonStyle>
                  )}
                </BackStyle>
              </div>
            </div>
          </div>
        </FlipBox>
      </ProductItem>
    )
  })

  return (
    <div className="container mb-5">
      {!!logo ? (
        <LogoProducerPositioin>
          <Img fixed={logo.fixed} />
        </LogoProducerPositioin>
      ) : (
        <Title darkText bgDark>
          {producer}
        </Title>
      )}
      <PositionItems>{mapProducts}</PositionItems>
    </div>
  )
}
export default ProductListProducer
