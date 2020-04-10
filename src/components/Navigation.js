import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Colors, Routes, AniLinkCustom } from "../common"
import Button from "@material-ui/core/Button"
import MenuMobile from "./MenuMobile"
import { MdShoppingCart, MdPhoneIphone } from "react-icons/md"
import { IoMdHome } from "react-icons/io"
import { FaCalendarAlt, FaImages } from "react-icons/fa"

const UpperDiv = styled.div`
  position: relative;
  background-color: ${Colors.basicDark};
  padding: 3px;
  font-size: 0.9rem;
  color: ${Colors.textBasic};
  font-weight: 500;
`

const HeaderStyled = styled.div`
  background-color: ${props =>
    props.scrollPosition > 100 ? Colors.navColor : "rgba(255, 255, 255, 0.9)"};
  transition-property: background-color;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  color: ${Colors.navText};
  box-shadow: 0px 0px 15px 1px #000;
`
const PhoneIcon = styled(MdPhoneIphone)`
  font-size: 1.3rem;
  padding-bottom: 3px;
`

const ListItemStyled = styled.li`
  display: inline-block;
  margin: 0;
  button {
    font-family: "Montserrat", sans-serif !important;
    font-weight: 500;
    padding: 15px 10px 15px 10px;
    border-radius: 0px;
    background-color: "";
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

const ListItemActive = styled(Button)`
  padding: 15px 10px 15px 10px;
  color: ${Colors.navTextActive};
  border-radius: 0px;
  transition-property: background-color, color;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  @media (max-width: 768px) {
    background-color: ${Colors.second};
    text-align: left;
  }
  @media (min-width: 769px) {
    background-color: ${Colors.basicLight};
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
`

const DivMobile = styled.div`
  position: relative;
  padding: 6px 0;
  text-align: right;
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

const Navigation = ({ history }) => {
  // const [scrollPosition, setSrollPosition] = useState(0)
  // const handleScroll = () => {
  //   const position = window.pageYOffset
  //   setSrollPosition(position)
  // }

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true })
  // }, [])

  // useEffect(() => {
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll)
  //   }
  // }, [])

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
    const isPathname = history.pathname === item.link

    return (
      <AniLinkCustom key={item.id} to={item.link}>
        <ListItemStyled>
          {isPathname ? (
            <ListItemActive>{item.name}</ListItemActive>
          ) : (
            <Button>{item.name}</Button>
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

        case "FaCalendarAlt":
          return <FaCalendarAlt />

        case "MdPhoneIphone":
          return <MdPhoneIphone />

        default:
          return <IoMdHome />
      }
    }
    return (
      <AniLinkCustom key={item.id} to={item.link}>
        <ButtonWidthDiv>
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
      <DivFullScreen
        style={{
          transform: menuActive.menu ? "translate(0,0)" : "translate(-100%,0)",
        }}
      >
        <DivMobileBackground onClick={handleClickMenu}></DivMobileBackground>
        <DivMobileMenu>{menuItemMobile}</DivMobileMenu>
      </DivFullScreen>
      <NavStyle>
        <UpperDiv>
          <div className="container">
            <div className="text-md-right text-center">
              <PhoneIcon />
              796 000 777
            </div>
          </div>
        </UpperDiv>
        <HeaderStyled scrollPosition={0}>
          <ul className="m-0 text-center d-none d-md-block">{links}</ul>
          <DivMobile className="d-md-none">
            <MenuMobile
              handleClickMenu={handleClickMenu}
              menuActive={menuActive.menu}
            />
          </DivMobile>
        </HeaderStyled>
      </NavStyle>
    </>
  )
}

export default Navigation
