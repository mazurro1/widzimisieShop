import React, {useState} from "react"
import CustomBackgroundImage from "../common/CustomBackgroundImage"
import styled from 'styled-components'
import Img from 'gatsby-image'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import { CSSTransition } from "react-transition-group"


const HeightHeader = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`

const ArrowRightPosition = styled.div`
  position: relative;
  z-index: 20;
  position: absolute;
  top: 50%;
  right: 20px;
`

const ArrowLeftPosition = styled.div`
  position: relative;
  z-index: 20;
  position: absolute;
  top: 50%;
  left: 20px;
`

const ArrowProps = styled.div`
  font-size: 2rem;
  color: white;
  cursor: pointer;
  padding: 10px;
  transition-property: transform;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  &:hover {
    transform: scale(1.6);
  }
`

const ImageItemStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${props => (props.active ? "5" : "10")};
  opacity: ${props => (props.active ? 1 : 0)};
  transform: ${props => props.active ? "scale(1)" : "scale(2)"};
  transition-property: opacity, transform;
  transition-duration: 0.5s;
  transition-timing-function: ease;
`

const Header = ({ image, children, home }) => {
  const [selectedIndexImage, setSelectedIndexImage] = useState(0)
  console.log(selectedIndexImage)
  const handleClickArrow = (action) => {
    const imagesLength = image.length - 1;
    if(action === "plus"){
      const nextIndexImage =
        selectedIndexImage >= imagesLength ? 0 : selectedIndexImage + 1;
      setSelectedIndexImage(nextIndexImage)
    }else{
      const prevIndexImage =
        selectedIndexImage === 0 ? imagesLength : selectedIndexImage - 1 ;
      setSelectedIndexImage(prevIndexImage)
    }
  }

  const mapImages = image.map((item, index) => {
    return (
      <ImageItemStyle key={index} active={selectedIndexImage === index}>
        {/* <CSSTransition
          in={index === selectedIndexImage}
          timeout={300}
          classNames="opacityUp"
          unmountOnExit
          // onExiting={}
        > */}
          <Img fluid={item.fluid} />
        {/* </CSSTransition> */}
      </ImageItemStyle>
    )
  })
  return (
    <HeightHeader>
      {mapImages}
      <ArrowRightPosition>
        <ArrowProps onClick={() => handleClickArrow("plus")}>
          <FaArrowRight />
        </ArrowProps>
      </ArrowRightPosition>
      <ArrowLeftPosition>
        <ArrowProps onClick={() => handleClickArrow("minus")}>
          <FaArrowLeft />
        </ArrowProps>
      </ArrowLeftPosition>
    </HeightHeader>
    // <CustomBackgroundImage  img={image}>
    //   {children}
    // </CustomBackgroundImage>
  )
}
export default Header

{/* <CSSTransition
        in={showButtonsGlasses}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onExited={handleGlassesExit}
      > */}