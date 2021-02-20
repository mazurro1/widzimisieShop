import React, { useState, useEffect } from "react"
import { Title, Colors } from "../common"
import styled from "styled-components"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import ShopSelect from "../components/Shop/ShopSelect"
import {
  getCategories,
  getCategoriesString,
} from "../components/Products/productsConsts"
import ProductListProducer from "../components/Products/ProductListProducer"

const SectionStyle = styled.section`
  min-height: calc(50vh - 31px);
`

const TextSelect = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${Colors.basicDark};
`

const Shop = props => {
  const [selectedSex, setSelectedSex] = useState({})
  const [selectedGlasses, setSelectedGlasses] = useState({})
  const [selectedProducer, setSelectedProducer] = useState({})
  const [filterProductsToRender, setFilterProductsToRender] = useState([])
  useEffect(() => {
    const allProducts = [...props.data.products.nodes]
    let allProductFilter = allProducts
    if (selectedSex.value) {
      allProductFilter = allProducts.filter(
        item => item.sex[0] === selectedSex.label
      )
    }
    if (selectedGlasses.value) {
      allProductFilter = allProductFilter.filter(
        item => item.typeOfGlasses[0] === selectedGlasses.label
      )
    }
    if (selectedProducer.value) {
      allProductFilter = allProductFilter.filter(
        item => item.producer === selectedProducer.label
      )
    }

    const producerCategories = getCategoriesString(allProductFilter, "producer")

    let arrayProducersItems = []
    producerCategories.forEach(producer => {
      let filterProductsToRender = []
      filterProductsToRender = allProductFilter.filter(
        item => item.producer === producer
      )
      const producerItems = {
        producer: producer,
        producerItems: filterProductsToRender,
      }
      arrayProducersItems.push(producerItems)
    })

    arrayProducersItems = arrayProducersItems.map(item => {
      const findLogo = props.data.allLogos.nodes.find(
        logo =>
          logo.name.trim().toLowerCase() === item.producer.trim().toLowerCase()
      )

      return {
        producer: item.producer,
        producerItems: item.producerItems,
        logo: !!findLogo ? findLogo.logo : null,
      }
    })

    setFilterProductsToRender(arrayProducersItems)
  }, [
    selectedSex,
    selectedGlasses,
    selectedProducer,
    props.data.products.nodes,
  ])

  const handleAddProduct = selectedProduct => {}

  const producersMap =
    filterProductsToRender.length > 0 ? (
      filterProductsToRender.map((item, index) => {
        return (
          <div key={index} className="mb-4">
            <ProductListProducer
              producerItems={item.producerItems}
              handleAddProduct={handleAddProduct}
              location={props.location.origin}
              selectItem={false}
              logo={item.logo}
            />
          </div>
        )
      })
    ) : (
      <h1 className="text-center mt-4">Brak produktów</h1>
    )
  const defaultDataToFilter = props.location.state ? props.location.state : {}
  return (
    <Layout history={props.location} noImage>
      <SectionStyle className="container pt-5">
        <Title>Sklep</Title>
        <div className="row">
          <div className="col-md-4 col-12 mt-2 mt-md-0">
            <TextSelect>Płeć:</TextSelect>
            <ShopSelect
              sexOptions={props.data.typeOfSex.nodes}
              setSelected={setSelectedSex}
              nameFilterOption="sex"
              nameDefaultOption="Dla każdego"
              filter={getCategories}
              dataToFilter={defaultDataToFilter}
            />
          </div>
          <div className="col-md-4 col-12 mt-2 mt-md-0">
            <TextSelect>Typ okularów:</TextSelect>
            <ShopSelect
              sexOptions={props.data.typeOfGlasses.nodes}
              setSelected={setSelectedGlasses}
              nameFilterOption="typeOfGlasses"
              nameDefaultOption="Wszystkie typy okularów"
              filter={getCategories}
              dataToFilter={defaultDataToFilter}
            />
          </div>
          <div className="col-md-4 col-12 mt-2 mt-md-0">
            <TextSelect>Producent:</TextSelect>
            <ShopSelect
              sexOptions={props.data.products.nodes}
              setSelected={setSelectedProducer}
              nameFilterOption="producer"
              nameDefaultOption="Wszyscy producenci"
              filter={getCategoriesString}
              dataToFilter={defaultDataToFilter}
            />
          </div>
        </div>
        <div className="mt-5">{producersMap}</div>
      </SectionStyle>
    </Layout>
  )
}

export const query = graphql`
  {
    products: allContentfulProduct {
      nodes {
        producer
        model
        typeOfGlasses
        colors
        sex
        price
        productImage {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
    typeOfGlasses: allContentfulProduct {
      nodes {
        typeOfGlasses
      }
    }
    typeOfSex: allContentfulProduct {
      nodes {
        sex
      }
    }

    contentfulOurProductsImages {
      headerImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }

    allLogos: allContentfulLogos {
      nodes {
        name
        logo {
          fixed(height: 80) {
            ...GatsbyContentfulFixed
          }
        }
      }
    }
  }
`

export default Shop
