import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SelectedTypeofGlasses from "../components/Products/SelectedTypeofGlasses"
import SelectedTypeofSex from "../components/Products/SelectedTypeofSex"
import ProductList from "../components/Products/ProductList"
import styled from "styled-components"
import { CSSTransition } from "react-transition-group"
import { StepperComponent } from "../common"

const getSteps = () => {
  return [
    "Wybierz typ",
    "Wybierz rodzaj",
    "Wybierz oprawki",
    "Wybierz szkła",
    "Dodatkowe opcje",
    "Podsumowanie",
  ]
}

const getCategories = (items, propName) => {
  let tempItems = items.map(item => {
    return item[propName][0]
  })
  let tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)
  return categories
}

const PositionRelative = styled.div`
  position: relative;
  min-height: calc(50vh - 31px);
`

const PositionSelectedItem = styled.div`
  position: relative;
`

const Products = props => {
  const [activeStep, setActiveStep] = React.useState(0)
  const steps = getSteps()

  const [state, setState] = useState({
    typeOfGlasses: [],
    typeOfSex: [],
    products: [],
    filterProducts: [],
  })
  const [valselectedTypeOfGlasses, setValSelectedTypeOfGlasses] = useState("")
  const [selectedTypeOfSex, setValSelectedTypeOfSex] = useState("")
  const [showButtonsGlasses, setShowButtonsGlasses] = useState(true)
  const [showButtonsSex, setShowButtonsSex] = useState(false)
  const [showProducts, setShowProducts] = useState(false)

  useEffect(() => {
    const products = props.data.products.nodes
    const typeOfGlasses = props.data.typeOfGlasses.nodes
    const typeOfSex = props.data.typeOfSex.nodes
    let allSelectedTypeOfGlasses = getCategories(typeOfGlasses, "typeOfGlasses")
    let allSelectedTypeOfSex = getCategories(typeOfSex, "sex")

    setState(prevState => ({
      ...prevState,
      typeOfGlasses: allSelectedTypeOfGlasses,
      typeOfSex: allSelectedTypeOfSex,
      products: products,
      filterProducts: products,
    }))
  }, [props.data])

  const handleChangeTypeOfGlasses = itemIncoming => {
    setValSelectedTypeOfGlasses(itemIncoming)
    setShowButtonsGlasses(false)
  }

  const handleChangeTypeOfSex = itemIncoming => {
    const filterProductsFirst = state.products.filter(item =>
      item.typeOfGlasses.includes(valselectedTypeOfGlasses)
    )
    const filterProductsSecond = filterProductsFirst.filter(item =>
      item.sex.includes(itemIncoming)
    )
    setValSelectedTypeOfSex(itemIncoming)
    setState(prevState => ({
      ...prevState,
      filterProducts: filterProductsSecond,
    }))
    setShowButtonsSex(false)
  }

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  const handleRestGenerator = activeStep => {
    handleReset()
  }

  const handleGlassesExit = () => {
    if (activeStep === 0) {
      handleNext()
      setShowButtonsSex(true)
    }
  }

  const handleSexExit = () => {
    if (activeStep === 1) {
      handleNext()
      setShowProducts(true)
    }
  }

  const handleProductExit = () => {
    if (activeStep === 2) {
      handleNext()
      //   setShowProducts(true)
    }
  }

  const handleGoBackGenerator = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
    if (activeStep === 1) {
      setShowButtonsGlasses(true)
      setValSelectedTypeOfGlasses("")
      setShowButtonsSex(false)
    } else if (activeStep === 2) {
      setValSelectedTypeOfSex("")
      setShowButtonsSex(true)
      setShowProducts(false)
    } else if (activeStep === 3) {
      setShowProducts(true)
    }
  }
  const validProps = !props.data || (
    <>
      <CSSTransition
        in={showButtonsGlasses}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onExiting={handleGlassesExit}
      >
        <SelectedTypeofGlasses
          type={state.typeOfGlasses}
          handleChangeTypeOfGlasses={handleChangeTypeOfGlasses}
        />
      </CSSTransition>
      <CSSTransition
        in={showButtonsSex}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onExiting={handleSexExit}
      >
        <SelectedTypeofSex
          type={state.typeOfSex}
          handleChangeTypeOfSex={handleChangeTypeOfSex}
        />
      </CSSTransition>
      <CSSTransition
        in={showProducts}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onExiting={handleProductExit}
      >
        <ProductList products={state.filterProducts} />
      </CSSTransition>
    </>
  )

  return (
    <Layout history={props.location}>
      <PositionRelative>
        <div className="d-none d-md-block">
          <StepperComponent activeStep={activeStep} steps={steps} />
          <div className="container">
            <div className="row">
              <div className="col-6">
                <button
                  onClick={handleGoBackGenerator}
                  disabled={activeStep <= 0}
                >
                  Cofnij
                </button>
                <button onClick={() => handleRestGenerator(activeStep)}>
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
        <PositionSelectedItem>{validProps}</PositionSelectedItem>
      </PositionRelative>
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
          fixed {
            src
          }
        }
        form {
          form
        }
        material {
          material
        }
        typ {
          typ
        }
        producerImage {
          fluid {
            src
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
  }
`

export default Products
