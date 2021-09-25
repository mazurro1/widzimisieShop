import React from "react"
import styled from "styled-components"
import { Colors } from "../common"

const H1Style = styled.h1`
  display: inline-block;
  padding: 10px 20px;
  text-align: center;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  color: ${props => (props.darkText ? "black" : "white")};
  font-family: "optima-light" !important;
  color: ${Colors.second};
  border-radius: 3px;
`

const WhiteLine = styled.div`
  width: 40px;
  max-width: 80%;
  height: 1px;
  background-color: ${props => (props.dark ? Colors.basic : Colors.basic)};
  margin: 20px auto;
  margin-top: 5px;
  margin-bottom: 30px;
  opacity: 0.4;
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
