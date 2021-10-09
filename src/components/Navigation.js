import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { Colors, Routes, AniLinkCustom } from "../common"
import Button from "@material-ui/core/Button"
import MenuMobile from "./MenuMobile"
import { MdShoppingCart, MdPhoneIphone, MdScanner } from "react-icons/md"
import { FaUserMd, FaHeart } from "react-icons/fa"
import { IoMdHome } from "react-icons/io"
import { useStaticQuery, graphql } from "gatsby"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"

const HeaderStyled = styled.div`
  padding-bottom: 10px;
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
      ? "box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.2)"
      : "box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.2)"}
`

const ButtonStyle = styled.button`
  background-color: transparent;
`

const ListItemActive = styled.button`
  padding: 15px 0px;
  border-radius: 0px;
  margin: 0 15px;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid ${Colors.second} !important;
  transition-property: background-color, color;
  transition-duration: 0.3s;
  transition-timing-function: ease;

  @media (max-width: 768px) {
    text-align: left;
  }

  &:active,
  &:focus {
    outline: none;
  }
`

const ListItemStyled = styled.li`
  display: inline-block;
  margin: 0;
  button {
    padding: 15px 0px;
    border-radius: 0px;
    margin: 0 15px;
    border: none;
    border-bottom: 1px solid transparent;
    background-color: transparent;
    transition-property: background-color, color, border-color;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    &:hover {
      border-color: ${Colors.second};
    }
    &:active,
    &:focus {
      outline: none;
    }
  }
`

const LogoText = styled.div`
  position: relative;
  font-size: 2rem;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 60px;
  letter-spacing: 0.6rem;
`

const CountFav = styled.div`
  position: absolute;
  top: 55%;
  right: ${props => (props.count <= 9 ? "13px" : "11px")};
  transform: translateY(-50%);
  font-size: 0.6rem;
  font-family: "Arial" !important;
  color: white;
  letter-spacing: 0rem;
`

const IconFavourite = styled.div`
  position: absolute;
  top: 50%;
  right: 25px;
  transform: translateY(-50%);
  font-size: 1.8rem;
  cursor: pointer;
  svg {
    color: #e53935;
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
  transform: ${props =>
    !props.scrollPositionNavigation
      ? `translateY(-${props.menuHeight}px)`
      : "translateY(0)"};

  transition-property: background-color, opacity, transform;
  transition-duration: 0.3s;
  transition-timing-function: ease;

  @media (max-width: 768px) {
    transform: translateY(0);
  }
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
  position: relative;
  button {
    width: 100%;
    text-align: center;
    padding: 15px 10px 15px 10px;
    padding-left: 50px;
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
  const [scrollPositionNavigation, setSrollPositionNavigation] = useState(false)
  const [menuHeight, setMenuHeight] = useState(0)
  // const [localStoreFav, setLocalStoreFav] = useState([])
  const refMenu = useRef(null)

  // useEffect(() => {
  //   const storageFav = localStorage.getItem("favProducts")
  //   const jsonData = JSON.parse(storageFav)
  //   if (!!jsonData) {
  //     setLocalStoreFav(jsonData)
  //   }
  // }, [localStorage])

  const {
    contentfulPageContact: { logo: logo },
  } = useStaticQuery(getData)

  useScrollPosition(({ prevPos, currPos }) => {
    if (prevPos.y < currPos.y || currPos.y > -140) {
      setSrollPositionNavigation(true)
    } else {
      setSrollPositionNavigation(false)
    }
    if (!!refMenu) {
      if (!!refMenu.current) {
        setMenuHeight(refMenu.current.clientHeight)
      }
    }
  })
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

        case "FaUserMd":
          return <FaUserMd />

        case "MdScanner":
          return <MdScanner />

        case "FaHeart":
          return <FaHeart />

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
        ref={refMenu}
        menuHeight={menuHeight}
      >
        <HeaderStyled
          scrollPositionNavigation={scrollPositionNavigation}
          isIndex={isIndex}
        >
          <ul className="m-0 text-center d-none d-md-block">
            <LogoText>
              TWOJEWIDZIMSIĘ
              <IconFavourite>
                <AniLinkCustom to={`/favourites`}>
                  <FaHeart />
                </AniLinkCustom>
              </IconFavourite>
            </LogoText>
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
