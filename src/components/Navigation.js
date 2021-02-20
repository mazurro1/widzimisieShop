import React, { useState } from "react"
import styled from "styled-components"
import { Colors, Routes, AniLinkCustom } from "../common"
import Button from "@material-ui/core/Button"
import MenuMobile from "./MenuMobile"
import { MdShoppingCart, MdPhoneIphone } from "react-icons/md"
import { IoMdHome } from "react-icons/io"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"

const UpperDiv = styled.div`
  position: relative;
  background-color: ${Colors.basicDark};
  padding: 3px;
  font-size: 0.9rem;
  color: ${Colors.textBasic};
  font-weight: 500;
  min-height: 31px;
`

const HeaderStyled = styled.div`
  background-color: ${props =>
    props.isIndex
      ? props.scrollPositionNavigation
        ? Colors.navColor
        : "rgba(255, 255, 255, 0.3)"
      : "white"};
  transition-property: background-color;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  ${props =>
    !props.scrollPositionNavigation
      ? "box-shadow: 0px 0px 15px 1px #000"
      : "box-shadow: 0px 0px 15px 1px #000"}
`
const PhoneIcon = styled(MdPhoneIphone)`
  font-size: 1.3rem;
  padding-bottom: 3px;
`

const ButtonStyle = styled.button`
  background-color: transparent;
`

const ListItemStyled = styled.li`
  display: inline-block;
  margin: 0;
  button {
    font-family: "Montserrat", sans-serif !important;
    font-weight: 600;
    padding: 15px 10px 15px 10px;
    border-radius: 0px;
    border: none;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: "transparent";
    margin: 0 1px;
    transition-property: background-color, color;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    &:hover {
      background-color: ${Colors.second};
      color: ${Colors.navTextActive};
    }
    &:active,
    &:focus {
      outline: none;
    }
  }
`

const ListItemActive = styled.button`
  padding: 15px 10px 15px 10px;
  color: ${Colors.navTextActive};
  border-radius: 0px;
  transition-property: background-color, color;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  border: none;
  button {
    color: ${Colors.navTextActive};
  }
  @media (max-width: 768px) {
    background-color: ${Colors.second};
    text-align: left;
  }
  @media (min-width: 769px) {
    background-color: ${props =>
      props.isIndex
        ? props.scrollPositionNavigation
          ? Colors.second
          : Colors.basic
        : Colors.second};
  }
  &:hover {
    background-color: ${Colors.secondLight};
  }
  &:active,
  &:focus {
    outline: none;
  }
`

const NavStyle = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transform: none;
  background-color: white;

  opacity: ${props => (props.scrollPositionNavigation ? "1" : "0.9")};

  transition-property: background-color, opacity;
  transition-duration: 0.3s;
  transition-timing-function: ease;
`

const DivMobile = styled.div`
  position: relative;
  padding: 6px 0;
  text-align: right;
  min-height: 57px;
`

const DivFullScreen = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  overflow: hidden;
  text-align: center;
  z-index: 1000;
  transition-property: transform;
  transition-duration: 0.5s;
  transition-timing-function: ease;
`

const DivMobileBackground = styled.div`
  position: relative;

  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`

const DivMobileMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100vw;
  width: 300px;
  height: 100%;
  background-color: ${Colors.navColor};
`

const ButtonWidthDiv = styled.div`
  button {
    width: 100%;
    padding: 15px 10px 15px 10px;
  }

  svg {
    position: absolute;
    left: 20px;
    top: 13px;
    font-size: 1.5rem;
  }
`

const getData = graphql`
  {
    contentfulPageContact {
      logo {
        fixed(width: 400, height: 80) {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`

const Navigation = ({ history }) => {
  // const [scrollPositionNavigation, setSrollPositionNavigation] = useState(false)
  const [scrollPositionNavigation, setSrollPositionNavigation] = useState(true)

  const {
    contentfulPageContact: { logo: logo },
  } = useStaticQuery(getData)

  // useScrollPosition(({ prevPos, currPos }) => {
  //   if (currPos.y < 0) {
  //     setSrollPositionNavigation(true)
  //   } else {
  //     setSrollPositionNavigation(false)
  //   }
  // })
  const isIndex = history.pathname === "/"

  const [menuActive, setMenuActive] = useState({
    menu: false,
  })
  const handleClickMenu = () => {
    setMenuActive(prevState => ({
      ...prevState,
      menu: !prevState.menu,
    }))
  }
  const links = Routes.map(item => {
    const isPathname =
      history.pathname === item.link || history.pathname === `${item.link}/`

    return (
      <AniLinkCustom key={item.id} to={item.link}>
        <ListItemStyled scrollPositionNavigation={scrollPositionNavigation}>
          {isPathname ? (
            <ListItemActive
              scrollPositionNavigation={scrollPositionNavigation}
              isIndex={isIndex}
            >
              {item.name}
            </ListItemActive>
          ) : (
            <ButtonStyle>{item.name}</ButtonStyle>
          )}
        </ListItemStyled>
      </AniLinkCustom>
    )
  })

  const menuItemMobile = Routes.map(item => {
    const isPathname = history.pathname === item.link
    const iconButton = () => {
      switch (item.icon) {
        case "IoMdHome":
          return <IoMdHome />

        case "MdShoppingCart":
          return <MdShoppingCart />

        case "MdPhoneIphone":
          return <MdPhoneIphone />

        default:
          return <IoMdHome />
      }
    }
    return (
      <AniLinkCustom key={item.id} to={item.link}>
        <ButtonWidthDiv onClick={handleClickMenu}>
          {isPathname ? (
            <ListItemActive>
              {iconButton()}
              {item.name}
            </ListItemActive>
          ) : (
            <Button>
              {iconButton()}
              {item.name}
            </Button>
          )}
        </ButtonWidthDiv>
      </AniLinkCustom>
    )
  })
  return (
    <>
      <NavStyle
        scrollPositionNavigation={scrollPositionNavigation}
        isIndex={isIndex}
      >
        <HeaderStyled
          scrollPositionNavigation={scrollPositionNavigation}
          isIndex={isIndex}
        >
          <ul className="m-0 text-center d-none d-md-block">
            <div>
              <AniLinkCustom to="/" key="image">
                <Img fixed={logo.fixed} />
              </AniLinkCustom>
            </div>
            {links}
          </ul>
          <DivMobile className="d-md-none">
            <MenuMobile
              handleClickMenu={handleClickMenu}
              menuActive={menuActive.menu}
            />
          </DivMobile>
        </HeaderStyled>
      </NavStyle>
      <DivFullScreen
        style={{
          transform: menuActive.menu ? "translate(0,0)" : "translate(-100%,0)",
        }}
      >
        <DivMobileBackground onClick={handleClickMenu}></DivMobileBackground>
        <DivMobileMenu>{menuItemMobile}</DivMobileMenu>
      </DivFullScreen>
    </>
  )
}

export default Navigation
