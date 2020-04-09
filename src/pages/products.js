import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SelectedTypeofGlasses from "../components/Products/SelectedTypeofGlasses"
import SelectedTypeofSex from "../components/Products/SelectedTypeofSex"
import ProductList from "../components/Products/ProductList"
import { CSSTransition } from "react-transition-group"
import { StepperComponent } from "../common"
import { MdRefresh, MdKeyboardArrowLeft } from "react-icons/md"
import Tooltip from "@material-ui/core/Tooltip"
import {
  getSteps,
  StyleButton,
  getCategories,
  WrapperIcoButton,
  PositionRelative,
  PositionSelectedItem,
  getCategoriesString,
} from "../components/Products/productsConsts"

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

  const handleRestGenerator = () => {
    setActiveStep(0)
    setShowButtonsSex(false)
    setShowProducts(false)
    setShowButtonsGlasses(true)
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
        timeout={0}
        classNames="alert"
        unmountOnExit
        onExiting={handleProductExit}
      >
        <ProductList
          products={state.filterProducts}
          getCategoriesString={getCategoriesString}
        />
      </CSSTransition>
    </>
  )

  return (
    <Layout history={props.location}>
      <PositionRelative>
        <div className="container">
          <div className="d-none d-md-block">
            <StepperComponent activeStep={activeStep} steps={steps} />
            <div className="container">
              <div className="row">
                <WrapperIcoButton
                  className="col-12 mx-auto"
                  disabledButton={activeStep <= 0}
                >
                  <Tooltip title="Cofnij" placement="top">
                    <StyleButton onClick={handleGoBackGenerator}>
                      <MdKeyboardArrowLeft />
                    </StyleButton>
                  </Tooltip>
                  <Tooltip title="Resetuj" placement="top">
                    <StyleButton onClick={handleRestGenerator}>
                      <MdRefresh />
                    </StyleButton>
                  </Tooltip>
                </WrapperIcoButton>
              </div>
            </div>
          </div>
        </div>
        <PositionSelectedItem className="mt-4">
          {validProps}
        </PositionSelectedItem>
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
            ...GatsbyContentfulFixed_tracedSVG
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
            ...GatsbyContentfulFluid_tracedSVG
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
