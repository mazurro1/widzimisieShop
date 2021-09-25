import React, { useState } from "react"
import styled from "styled-components"
import { Colors } from "../common/consts"
import { AniLinkCustom } from "../common/AniLinkCustom"
import Button from "@material-ui/core/Button"

const RodoPosition = styled.div`
  position: fixed;
  bottom: 5px;
  left: 5px;
  right: 5px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 5px 10px;
  color: white;
  z-index: 2000;
`

const PositionRodoButton = styled.div`
  text-align: right;
`

const PositionRelative = styled.div`
  position: relative;
`

const ButtonStyle = styled.div`
  button {
    background-color: #f44336;
    color: white;
    transition-property: background-color, transform;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    margin: 5px;
    &:hover {
      background-color: #d32f2f;
    }
  }
`

const Rodo = () => {
  const [rodoActive, setRodoActive] = useState(true)
  const handleClickRodo = () => {
    setRodoActive(false)
  }
  return (
    <>
      {!!rodoActive && (
        <RodoPosition>
          <PositionRelative>
            <div className="container">
              Ta strona używa plików cookies. Korzystanie ze strony bez zmiany
              ustawień przeglądarki w tym zakresie, oznacza zgodę na ich
              używanie. Więcej informacji na ten temat znajduje się w naszej
              <AniLinkCustom to={`/policy`}>
                {" "}
                polityce prywatności.
              </AniLinkCustom>
            </div>
          </PositionRelative>
          <PositionRodoButton>
            <div className="container">
              <ButtonStyle>
                <Button onClick={handleClickRodo}>Akceptuj</Button>
              </ButtonStyle>
            </div>
          </PositionRodoButton>
        </RodoPosition>
      )}
    </>
  )
}
export default Rodo
