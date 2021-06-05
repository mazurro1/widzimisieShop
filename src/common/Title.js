import React from "react"
import styled from "styled-components"
import { Colors } from "../common"

const H1Style = styled.h1`
  display: inline-block;
  padding: 10px 20px;
  text-align: center;
  max-width: 100%;
  margin: 0 auto;
  font-weight: 300;
  text-align: center;
  color: ${props => (props.darkText ? "black" : "white")};
  /* color: ${props => (props.bgDark ? Colors.basicDark : Colors.textBasic)}; */
  /* color: white; */
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

const TextCenterH1 = styled.div`
  text-align: center;
`

export const Title = ({
  children,
  width = 300,
  dark,
  bgDark,
  darkText = false,
}) => {
  return (
    <TextCenterH1>
      <H1Style width={width} dark={dark} bgDark={bgDark} darkText={darkText}>
        {children}
      </H1Style>
      <WhiteLine dark={dark} />
    </TextCenterH1>
  )
}
