import React from "react"
import Select from "react-select"
import styled from "styled-components"
import { Colors } from "../../common"

const selecGlassItems = [
  {
    value: 1,
    label: "Jednoogniskowe",
  },
  {
    value: 2,
    label: "Progresywne",
  },
]

const TextProgresiv = styled.div`
  font-size: 0.9rem;
  color: ${Colors.second};
  font-weight: bold;
`

const SelectGlassesModal = ({
  setSelectedOptionGlass,
  selectedOptionGlass,
}) => {
  const handleChange = selectedOption => {
    setSelectedOptionGlass(selectedOption)
  }

  return (
    <div className="container">
      <TextProgresiv>Soczewki do wyboru (na podstawie wieku)</TextProgresiv>
      <Select
        onChange={handleChange}
        options={selecGlassItems}
        defaultValue={selecGlassItems[1]}
        value={selectedOptionGlass}
        isSearchable={false}
        theme={theme => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: "#bdbdbd",
            primary: Colors.second,
          },
        })}
      />
    </div>
  )
}
export default SelectGlassesModal
