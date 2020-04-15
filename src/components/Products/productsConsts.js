import styled from "styled-components"
import { IconButton } from "@material-ui/core"
import { Colors } from "../../common"
export const getSteps = () => {
  return [
    "Wybierz typ",
    "Wybierz rodzaj",
    "Wybierz oprawki",
    "Wybierz szkła",
    "Dodatkowe opcje",
    "Podsumowanie",
  ]
}

export const StyleButton = styled(IconButton)`
  background-color: ${Colors.second};
  transition-property: background-color, opacity;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  margin: 5px;
  color: white;
  opacity: 1;
  padding: 5px;
  &:hover {
    background-color: ${Colors.secondLight};
  }
  &:disabled {
    opacity: 0;
  }
`

export const getCategories = (items, propName) => {
  let tempItems = items.map(item => {
    return item[propName][0]
  })
  let tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)
  return categories
}

export const getCategoriesString = (items, propName) => {
  let tempItems = items.map(item => {
    return item[propName]
  })
  let tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)
  return categories
}

export const WrapperIcoButton = styled.div`
  button {
    opacity: ${props => (props.disabledButton ? 0 : 1)};
    visibility: ${props => (props.disabledButton ? "hidden" : "")};
  }
`

export const PositionRelative = styled.div`
  position: relative;
  min-height: calc(60vh - 31px);
`

export const PositionSelectedItem = styled.div`
  position: relative;
`
