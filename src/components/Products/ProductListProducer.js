import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styled from "styled-components"
import { Title, Colors } from "../../common"
import Img from "gatsby-image"
import Button from "@material-ui/core/Button"

const SlickSliderCustom = styled(Slider)`
  .slick-prev {
    &:before {
      color: black !important;
    }
  }
  .slick-next {
    &:before {
      color: black !important;
    }
  }
`

const TextStyle = styled.div`
  position: absolute;
  bottom: 3px;
  left: 0;
  right: 0;
  text-align: center;
  font-weight: 500;
  color: white;
`

const PositionItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const ProductItem = styled.div`
  padding: 20px 10px;
  width: 280px;
`
const FlipBox = styled.div`
  .flip-box {
    background-color: transparent;
    max-width: 258px;
    height: 175px;
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
    background-color: ${Colors.basic};
    color: black;
  }

  .flip-box-back {
    background-color: ${Colors.basicDark};
    color: white;
    transform: rotateY(180deg);
  }
`

const ImageStyle = styled(Img)`
  border-bottom: 2px solid white;
  height: 175px;
  /* border: 1px solid ${Colors.basicDark}; */
  box-shadow: 0 0 5px 0 rgba(0,0,0,0.2);
`

const PriceStyle = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: #f44336;
  padding: 5px 10px;
  color: white;
  border-radius: 5px;
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
}) => {
  const { producer } = producerItems[0]

  const elementsOnPage = () => {
    if (window.innerWidth > 1200) {
      return producerItems.length >= 4 ? 4 : producerItems.length
    } else if (window.innerWidth < 1199 && window.innerWidth > 992) {
      return producerItems.length >= 3 ? 3 : producerItems.length
    } else if (window.innerWidth < 991 && window.innerWidth > 768) {
      return producerItems.length >= 2 ? 2 : producerItems.length
    } else if (window.innerWidth < 767) {
      return 1
    }
  }

  const mapProducts = producerItems.map((item, index) => {
    return (
      <ProductItem key={index}>
        <FlipBox>
          <div className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <ImageStyle fluid={item.productImage.fluid} />
                {/* <TextStyle>{item.model}</TextStyle> */}
                <PriceStyle>{item.price} zł</PriceStyle>
              </div>
              <div className="flip-box-back">
                <BackStyle>
                  <h2>{item.producer}</h2>
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

  const carusellSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: elementsOnPage(),
    lazyLoad: false,
    slidesToScroll: elementsOnPage(),
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
  }

  return (
    <div className="container mb-5">
      {!!logo ? (
        <LogoProducerPositioin>
          <Img fixed={logo.fixed} />
        </LogoProducerPositioin>
      ) : (
        <Title bgDark>{producer}</Title>
      )}
      {/* {mapProducts} */}
      <PositionItems>{mapProducts}</PositionItems>
      {/* <SlickSliderCustom {...carusellSettings}>{mapProducts}</SlickSliderCustom> */}
    </div>
  )
}
export default ProductListProducer
