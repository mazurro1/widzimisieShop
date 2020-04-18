import React, { useEffect } from "react"
import Select from "react-select"
import { Colors } from "../../common"

const ShopSelect = ({
  sexOptions,
  setSelected,
  nameFilterOption,
  nameDefaultOption,
  filter,
  dataToFilter,
}) => {
  useEffect(() => {
    const producerCategoriesEffect = filter(sexOptions, nameFilterOption)
    let mapedsexOptionsEffect = [
      {
        id: 0,
        label: nameDefaultOption,
      },
    ]
    producerCategoriesEffect.forEach((item, index) => {
      mapedsexOptionsEffect.push({
        value: index + 1,
        label: item,
      })
    })

    const mapToFilterItemsEffect = mapedsexOptionsEffect.map(item => {
      const value = Object.values(item)
      return value[1]
    })
    const indexOfSelectedEffect = dataToFilter[nameFilterOption]
      ? mapToFilterItemsEffect.indexOf(dataToFilter[nameFilterOption])
      : -1
    if (indexOfSelectedEffect > 0) {
      const valueToDefault = mapedsexOptionsEffect[indexOfSelectedEffect]
      setSelected(valueToDefault)
    }
  }, [
    filter,
    dataToFilter,
    nameDefaultOption,
    nameFilterOption,
    setSelected,
    sexOptions,
  ])

  const producerCategories = filter(sexOptions, nameFilterOption)
  let mapedsexOptions = [
    {
      id: 0,
      label: nameDefaultOption,
    },
  ]
  producerCategories.forEach((item, index) => {
    mapedsexOptions.push({
      value: index + 1,
      label: item,
    })
  })

  const handleChange = selectedOption => {
    if (selectedOption.value > 0) {
      setSelected(selectedOption)
    } else {
      setSelected({})
    }
  }

  const mapToFilterItems = mapedsexOptions.map(item => {
    const value = Object.values(item)
    return value[1]
  })

  const indexOfSelected = dataToFilter[nameFilterOption]
    ? mapToFilterItems.indexOf(dataToFilter[nameFilterOption])
    : -1

  const valueToDefault =
    dataToFilter[nameFilterOption] && indexOfSelected > 0
      ? mapedsexOptions[indexOfSelected]
      : mapedsexOptions[0]

  return (
    <>
      <Select
        onChange={handleChange}
        options={mapedsexOptions}
        defaultValue={valueToDefault}
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
    </>
  )
}
export default ShopSelect
