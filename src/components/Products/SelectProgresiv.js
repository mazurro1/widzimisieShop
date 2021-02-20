import React from "react"
import Select, { components } from "react-select"
import styled from "styled-components"
import { Colors } from "../../common"

const selectProgresivItems = [
  {
    value: 1,
    label: "Bez gwarancji adaptacji",
    price: 390,
  },
  {
    value: 2,
    label: "Gwarancją adaptacji marki Rodenstock podstawowe",
    price: 600,
  },
  {
    value: 3,
    label: "Gwarancją adaptacji marki Rodenstock średnio zaawansowane",
    price: 900,
  },
  {
    value: 4,
    label: "Gwarancją adaptacji marki Rodenstock zaawansowane",
    price: 1600,
  },
  {
    value: 5,
    label: "Gwarancją adaptacji marki Rodenstock indywidualne",
    price: 1900,
  },
]

const StyledPriceDiv = styled.div`
  position: relative;
  width: 100%;
  display: block;
`

const StyledPriceOption = styled.span`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 0.9rem;
  background-color: ${props =>
    props.isSelected ? Colors.secondDark : "#f44336"};
  padding: 1px 10px;
  /* color: white; */
  min-width: 100px;
  text-align: center;
`

const StyledPriceOptionUnder = styled.div`
  font-size: 1rem;

  text-align: center;
  float: right;

  span {
    display: inline-block;
    background-color: ${props =>
      props.isSelected ? Colors.secondDark : "#f44336"};
    width: 100px;
    /* color: white; */
    padding: 2px 10px;
  }
`

const PositionRelative = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  padding-right: 100px;
`

const TextProgresiv = styled.div`
  font-size: 0.9rem;
  color: ${Colors.second};
  font-weight: bold;
`

const SelectProgresiv = ({
  setSelectedOptionProgresive,
  selectedOptionProgresive,
}) => {
  const handleChange = selectedOption => {
    setSelectedOptionProgresive(selectedOption)
  }

  const CustomOption = ({ children, ...props }) => {
    return (
      <components.Option {...props}>
        <PositionRelative>
          {children}
          <StyledPriceOption isSelected={props.isSelected}>
            {props.data.price} zł
          </StyledPriceOption>
        </PositionRelative>
      </components.Option>
    )
  }

  return (
    <div className="container">
      <TextProgresiv>Soczewki progresywne</TextProgresiv>
      <Select
        onChange={handleChange}
        options={selectProgresivItems}
        defaultValue={selectProgresivItems[1]}
        isSearchable={false}
        value={selectedOptionProgresive}
        components={{ Option: CustomOption }}
        theme={theme => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: "#bdbdbd",
            primary: Colors.basicDark,
          },
        })}
      />
      <StyledPriceDiv className="mb-5 text-right mt-3 pr-1">
        <StyledPriceOptionUnder>
          Cena:<span className="ml-2">{selectedOptionProgresive.price} zł</span>
        </StyledPriceOptionUnder>
      </StyledPriceDiv>
    </div>
  )
}
export default SelectProgresiv
