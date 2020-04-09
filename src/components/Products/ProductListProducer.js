import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styled from "styled-components"
import CustomBackgroundImageProducer from "../../common/CustomBackgroundImageProducer"
import { Title } from "../../common"

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

const ProductItem = styled.div`
  padding: 10px;
  .productItem {
    height: 200px;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    background-color: red;
  }
`

const ProductListProducer = ({ producerItems }) => {
  const {
    producer,
    model,
    colors,
    price,
    productImage,
    producerImage,
  } = producerItems[0]
  const mapProducts = producerItems.map((item, index) => {
    return (
      <ProductItem key={index}>
        <div className="productItem">{item.model}</div>
      </ProductItem>
    )
  })
  const carusellSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: producerItems.length >= 4 ? 4 : producerItems.length,
    lazyLoad: true,
    slidesToScroll: producerItems.length >= 4 ? 4 : producerItems.length,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
  }
  return (
    <>
      <div className="container mb-5">
        <Title bgDark>{producer}</Title>
        <SlickSliderCustom {...carusellSettings}>
          {mapProducts}
        </SlickSliderCustom>
      </div>
      <CustomBackgroundImageProducer img={producerImage.fluid}>
        {producer}
      </CustomBackgroundImageProducer>
    </>
  )
}
export default ProductListProducer
