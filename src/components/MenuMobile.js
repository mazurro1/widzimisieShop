import React from "react"
import styled from "styled-components"
import Button from "@material-ui/core/Button"
import { IoIosMenu } from "react-icons/io"

const MenuIcon = styled(IoIosMenu)`
  font-size: 1.8rem;
`

const MenuMobile = ({ handleClickMenu, menuActive }) => {
  return (
    <>
      <Button className="mr-2" onClick={handleClickMenu} disabled={menuActive}>
        <MenuIcon />
      </Button>
    </>
  )
}
export default MenuMobile
