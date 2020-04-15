import React, { useState } from "react"
import ProductListProducer from "./ProductListProducer"
import Select from "react-select"
import { Colors } from "../../common"

const ProductList = ({
  products,
  getCategoriesString,
  handleAddProduct,
  location,
}) => {
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

  const producersMap = arrayProducersItems.map((item, index) => {
    return (
      <div key={index} className="mb-4">
        <ProductListProducer
          producerItems={item.producerItems}
          handleAddProduct={handleAddProduct}
          location={location}
        />
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
      {producerCategories.length > 1 ? (
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
      ) : null}
      {arrayProducersItems.length > 0 ? (
        producersMap
      ) : (
        <h1 className="text-center mt-4">Brak produktów</h1>
      )}
    </>
  )
}
export default ProductList
