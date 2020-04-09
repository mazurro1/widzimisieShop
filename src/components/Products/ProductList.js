import React, { useState, useEffect } from "react"
import ProductListProducer from "./ProductListProducer"
import Select from "react-select"
import styled from "styled-components"
import { Colors } from "../../common"

const ProductList = ({ products, getCategoriesString }) => {
  const [selectValue, setSelectValue] = useState("")
  const [producerFilter, setProducerFilter] = useState([])
  const producerCategories = getCategoriesString(products, "producer")

  let arrayProducersItems = []
  if (selectValue.length > 0) {
    const newProducer = {
      producer: selectValue,
      producerItems: producerFilter,
    }
    arrayProducersItems.push(newProducer)
  } else {
    producerCategories.forEach(producer => {
      const filterProducts = products.filter(item => item.producer === producer)
      const producerItems = {
        producer: producer,
        producerItems: filterProducts,
      }
      arrayProducersItems.push(producerItems)
    })
  }
  console.log(arrayProducersItems)
  const producersMap = arrayProducersItems.map((item, index) => {
    return (
      <div key={index} className="mb-5">
        <ProductListProducer producerItems={item.producerItems} />
      </div>
    )
  })

  const handleChange = selectedOption => {
    if (selectedOption.value === "Wszyscy") {
      setSelectValue("")
      setProducerFilter([])
    } else {
      const newFilterProducts = products.filter(
        item => item.producer === selectedOption.value
      )
      setSelectValue(selectedOption.value)
      setProducerFilter(newFilterProducts)
    }
  }
  const producerCategoriesAndAll = ["Wszyscy", ...producerCategories]
  const mapedSelectedValue = producerCategoriesAndAll.map(item => {
    return {
      value: item,
      label: item,
    }
  })

  return (
    <>
      <div className="container mb-4">
        <div className="row">
          <div className="col-md-4 col-12">
            <Select
              defaultValue={mapedSelectedValue[0]}
              onChange={handleChange}
              options={mapedSelectedValue}
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
        </div>
      </div>
      {producersMap}
    </>
  )
}
export default ProductList
