import React from "react"
import styled from "styled-components"
import { Colors } from "../common"

const H1Style = styled.h1`
  width: ${props => `${props.width}px`};
  max-width: 100%;
  padding-bottom: 10px;
  margin: 0 auto;
  font-weight: 300;
  text-align: center;
  color: ${props => (props.bgDark ? Colors.basicDark : Colors.textBasic)};
  font-weight: ${props => (props.bgDark ? "bold" : "normal")};
  background-color: ${props => (props.bgDark ? "transparent" : Colors.second)};
  border-radius: 3px;
  transition-property: background-color;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  &:hover {
    background-color: ${props => (props.bgDark ? "" : Colors.secondDark)};
  }
`

const WhiteLine = styled.div`
  width: 40px;
  max-width: 80%;
  height: 2px;
  background-color: ${props => (props.dark ? Colors.basic : Colors.basic)};
  margin: 20px auto;
  margin-bottom: 20px;
`

export const Title = ({ children, width = 300, dark, bgDark }) => {
  return (
    <>
      <H1Style width={width} dark={dark} bgDark={bgDark}>
        {children}
      </H1Style>
      <WhiteLine dark={dark} />
    </>
  )
}
