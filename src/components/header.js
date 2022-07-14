import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import { Colors } from "../common/consts"

const HeightHeader = styled.div`
  position: relative;
  height: 60vh;
  overflow: hidden;
  margin-top: 130px;
`

const HeightHeaderMobile = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 25vh;
  margin-top: 65px;
`

const BackgroundToArrow = styled.div`
  position: absolute;
  z-index: 20;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(255, 255, 255, 0) 10%,
    rgba(255, 255, 255, 0) 90%,
    rgba(0, 0, 0, 0.3) 100%
  );
`

const ArrowRightPosition = styled.div`
  position: relative;
  z-index: 20;
  position: absolute;
  top: 30%;
  right: 20px;
`

const ArrowLeftPosition = styled.div`
  position: relative;
  z-index: 20;
  position: absolute;
  top: 30%;
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
  transform: ${props => (props.active ? "scale(1)" : "scale(2)")};
  transition-property: opacity, transform;
  transition-duration: 1s;
  transition-timing-function: ease;
`

const Dots = styled.div`
  position: absolute;
  z-index: 50;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.3) 40%
  );
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const DotItem = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: ${props => (props.active ? Colors.second : "gray")};
  margin: 5px;
  transition-property: background-color;
  transition-duration: 0.3s;
  transition-timing-function: ease;
`

const Header = ({ imageHeader = null, children, home }) => {
  const [selectedIndexImage, setSelectedIndexImage] = useState(0)
  const timerToClearSomewhere = useRef(null)

  const handleClickArrow = action => {
    const imagesLength = imageHeader.length - 1

    if (action === "plus") {
      const nextIndexImage =
        selectedIndexImage >= imagesLength ? 0 : selectedIndexImage + 1
      setSelectedIndexImage(nextIndexImage)
    } else {
      const prevIndexImage =
        selectedIndexImage === 0 ? imagesLength : selectedIndexImage - 1
      setSelectedIndexImage(prevIndexImage)
    }
  }

  useEffect(() => {
    timerToClearSomewhere.current = setInterval(() => {
      const imagesLength = imageHeader.length - 1
      const nextIndexImage =
        selectedIndexImage >= imagesLength ? 0 : selectedIndexImage + 1
      setSelectedIndexImage(nextIndexImage)
    }, 10000)
    return () => {
      clearInterval(timerToClearSomewhere.current)
    }
  }, [selectedIndexImage])

  let mapImages = null
  let mapDots = null
  if (!!imageHeader) {
    mapImages = imageHeader.map((item, index) => {
      return (
        <ImageItemStyle key={index} active={selectedIndexImage === index}>
          {!!item.fixed ? (
            <Img fixed={item.fixed} />
          ) : (
            <video
              width="100%"
              height="100%"
              loop
              autoPlay={true}
              name="media"
              muted={true}
            >
              <source src={item.file.url} type="video/mp4" />
            </video>
          )}
        </ImageItemStyle>
      )
    })
    mapDots = imageHeader.map((item, index) => {
      return (
        <DotItem key={index} active={selectedIndexImage === index}></DotItem>
      )
    })
  }

  return (
    <>
      <div className="d-none d-md-block">
        <HeightHeader>
          <BackgroundToArrow />
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
          <Dots>{mapDots}</Dots>
        </HeightHeader>
      </div>
      <div className="d-md-none">
        <HeightHeaderMobile>
          <BackgroundToArrow />
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
          <Dots>{mapDots}</Dots>
        </HeightHeaderMobile>
      </div>
    </>
  )
}
export default Header
