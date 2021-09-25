import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Title } from "../common"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import ProductListProducer from "../components/Products/ProductListProducer"
import { getCategoriesString } from "../components/Products/productsConsts"

const MarginTopFav = styled.div`
  padding-top: 40px;
`

const Favourite = props => {
  const [localStoreFav, setLocalStoreFav] = useState([])
  const [selectedSex, setSelectedSex] = useState({})
  const [selectedGlasses, setSelectedGlasses] = useState({})
  const [selectedProducer, setSelectedProducer] = useState({})
  const [filterProductsToRender, setFilterProductsToRender] = useState([])

  useEffect(() => {
    const storageFav = localStorage.getItem("favProducts")
    const jsonData = JSON.parse(storageFav)
    if (!!jsonData) {
      setLocalStoreFav(jsonData)
    }
  }, [])

  const handleAddFav = productId => {
    let allStorageFav = localStoreFav
    const isInStore = allStorageFav.some(
      itemStore => itemStore.model === productId
    )
    if (isInStore) {
      allStorageFav = allStorageFav.filter(
        itemStore => itemStore.model !== productId
      )
      localStorage.setItem("favProducts", JSON.stringify(allStorageFav))
    } else {
      const newItem = {
        model: productId,
      }
      allStorageFav.push(newItem)
      localStorage.setItem("favProducts", JSON.stringify(allStorageFav))
    }
    setLocalStoreFav(allStorageFav)
  }

  const allProducts = !!props.data.products ? props.data.products.nodes : []
  const filterProducts = allProducts.filter(itemProduct => {
    return localStoreFav.some(
      itemFav =>
        itemFav.model === `${itemProduct.producer}-${itemProduct.model}`
    )
  })

  useEffect(() => {
    const allProducts = [...filterProducts]
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
    localStoreFav,
    props.data.products.nodes,
  ])

  const producersMap =
    filterProductsToRender.length > 0 ? (
      filterProductsToRender.map((item, index) => {
        return (
          <div key={index} className="mb-4">
            <ProductListProducer
              producerItems={item.producerItems}
              location={props.location.origin}
              selectItem={false}
              logo={item.logo}
              localStoreFav={localStoreFav}
              handleAddFav={handleAddFav}
            />
          </div>
        )
      })
    ) : (
      <h1 className="text-center mt-4">Brak produktów</h1>
    )

  return (
    <Layout history={props.location} noImage>
      <SEO title="Favourite" description="Moje ulubione" />
      <MarginTopFav>
        <Title>Ulubione</Title>
      </MarginTopFav>
      {producersMap}
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

export default Favourite
