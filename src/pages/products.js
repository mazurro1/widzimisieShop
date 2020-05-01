import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import SelectedTypeofGlasses from "../components/Products/SelectedTypeofGlasses"
import SelectedTypeofSex from "../components/Products/SelectedTypeofSex"
import SelectGlasses from "../components/Products/SelectGlasses"
import ProductList from "../components/Products/ProductList"
import ExtraOptions from "../components/Products/ExtraOptions"
import ProductSummary from "../components/Products/ProductSummary"
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
import styled from "styled-components"
import ProductDialog from "../components/Products/ProductDialog"
import TableEyesValues from "../components/Products/TableEyesValues"

const PositionProducts = styled.div`
  margin-top: 88px;
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
  const [selectedProduct, setSelectedProduct] = useState({})
  const [showSelectGlasses, setShowSelectGlasses] = useState(false)
  const [selectGlassValue, setSelectGlassValue] = useState({})
  const [showExtraOptions, setShowExtraOptions] = useState(false)
  const [extraOptionsValue, setExtraOptionsValue] = useState({})
  const [showSummary, setShowSummary] = useState(false)
  const [selectionPrice, setSelectionPrice] = useState("priceBasic")
  const [otherExtraPirce, setOtherExtraPrice] = useState(0)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [goBackToExtraOption, setGoBackToExtraOption] = useState(false)
  const [selectedOptionGlass, setSelectedOptionGlass] = useState({
    value: 2,
    label: "Progresywne",
  })

  const [selectedOptionProgresive, setSelectedOptionProgresive] = useState({
    value: 2,
    label: "Gwarancją adaptacji marki Rodenstock podstawowe",
    price: 600,
  })
  const [inputsLeftValue, setInputsLeftValue] = useState({
    sfera: 0,
    cylinder: 0,
    os: 0,
    add: "",
    pd: 0,
    wysokosc: "",
    pryzmat: "",
    baza: "",
  })

  const [inputsRightValue, setInputsRightValue] = useState({
    sfera: 0,
    cylinder: 0,
    os: 0,
    add: "",
    pd: 0,
    wysokosc: "",
    pryzmat: "",
    baza: "",
  })
  console.log(selectionPrice)

  useEffect(() => {
    if (selectionPrice === "priceThird") {
      setDialogOpen(true)
    } else {
      setDialogOpen(false)
    }
  }, [selectionPrice])

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

  useEffect(() => {
    if (
      (inputsLeftValue.add <= 4 && inputsLeftValue.add >= 1) ||
      (inputsRightValue.add <= 4 && inputsRightValue.add >= 1)
    ) {
      setSelectionPrice("priceThird")
    } else if (
      !(inputsLeftValue.sfera > -6 && inputsLeftValue.sfera < 6) ||
      !(inputsRightValue.sfera > -6 && inputsRightValue.sfera < 6) ||
      !(inputsLeftValue.cylinder > -3 && inputsLeftValue.cylinder < 3) ||
      !(inputsRightValue.cylinder > -3 && inputsRightValue.cylinder < 3)
    ) {
      setSelectionPrice("priceSecond")
      if (inputsLeftValue.pryzmat > 0 || inputsRightValue.pryzmat > 0) {
        setOtherExtraPrice(60)
      } else {
        setOtherExtraPrice(0)
      }
    } else {
      setSelectionPrice("priceBasic")
      if (inputsLeftValue.pryzmat > 0 || inputsRightValue.pryzmat > 0) {
        setOtherExtraPrice(100)
      } else {
        setOtherExtraPrice(0)
      }
    }
  }, [inputsLeftValue, inputsRightValue, setSelectionPrice, setOtherExtraPrice])

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
    setShowSelectGlasses(false)
    setShowButtonsGlasses(true)
    setSelectedProduct({})
    setValSelectedTypeOfGlasses("")
    setValSelectedTypeOfSex("")
    setShowExtraOptions(false)
    setExtraOptionsValue({})
    setShowSummary(false)
    setSelectGlassValue({})
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
      setShowSelectGlasses(true)
    }
  }

  const handleSelectGlassesExit = () => {
    if (activeStep === 3) {
      handleNext()
      setShowExtraOptions(true)
    }
  }

  const handleExtraOptionsExit = () => {
    if (activeStep === 4) {
      handleNext()
      setShowSummary(true)
    }
  }

  const handleSummaryExit = () => {
    if (activeStep === 5) {
      handleNext()
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
      setSelectedProduct({})
      setShowProducts(true)
      setShowSelectGlasses(false)
    } else if (activeStep === 4) {
      setShowSelectGlasses(true)
      setSelectGlassValue({})
      setShowExtraOptions(false)
    } else if (activeStep === 5) {
      setShowExtraOptions(true)
      setExtraOptionsValue({})
      setShowSummary(false)
    } else if (activeStep === 6) {
      setShowSummary(true)
    }
  }

  useEffect(() => {
    if (goBackToExtraOption) {
      handleGoBackGenerator()
      setGoBackToExtraOption(false)
    }
  }, [goBackToExtraOption])

  const handleAddProduct = selectedProduct => {
    setSelectedProduct(selectedProduct)
    setShowProducts(false)
  }

  const handleSelectGlassClick = item => {
    setSelectGlassValue(item)
    setShowSelectGlasses(false)
  }

  const handleExtraOptionClick = item => {
    setExtraOptionsValue(item)
    setShowExtraOptions(false)
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
          handleAddProduct={handleAddProduct}
          location={props.location.origin}
        />
      </CSSTransition>
      <CSSTransition
        in={showSelectGlasses}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onExiting={handleSelectGlassesExit}
      >
        <SelectGlasses handleSelectGlassClick={handleSelectGlassClick} />
      </CSSTransition>
      <CSSTransition
        in={showExtraOptions}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onExiting={handleExtraOptionsExit}
      >
        <ExtraOptions
          handleExtraOptionClick={handleExtraOptionClick}
          selectionPrice={selectionPrice}
        />
      </CSSTransition>
      <CSSTransition
        in={showSummary}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onExiting={handleSummaryExit}
      >
        <ProductSummary
          extraOptionsValue={extraOptionsValue}
          selectGlassValue={selectGlassValue}
          selectedProduct={selectedProduct}
          selectedTypeOfSex={selectedTypeOfSex}
          valselectedTypeOfGlasses={valselectedTypeOfGlasses}
          selectionPrice={selectionPrice}
          otherExtraPirce={otherExtraPirce}
          selectedOptionProgresive={selectedOptionProgresive}
          setSelectedOptionProgresive={setSelectedOptionProgresive}
          selectedOptionGlass={selectedOptionGlass}
          setDialogOpen={setDialogOpen}
          setGoBackToExtraOption={setGoBackToExtraOption}
        />
      </CSSTransition>
    </>
  )
  return (
    <PositionProducts>
      <TableEyesValues
        setSelectionPrice={setSelectionPrice}
        setOtherExtraPrice={setOtherExtraPrice}
        inputsLeftValue={inputsLeftValue}
        setInputsLeftValue={setInputsLeftValue}
        inputsRightValue={inputsRightValue}
        setInputsRightValue={setInputsRightValue}
      />
      <PositionRelative>
        <div className="container">
          <div className="d-none d-md-block">
            <StepperComponent activeStep={activeStep} steps={steps} />
          </div>
          <div className="container mt-md-1 mt-5">
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
        <PositionSelectedItem className="mt-md-4">
          {validProps}
        </PositionSelectedItem>
      </PositionRelative>
      <ProductDialog
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        selectedOptionProgresive={selectedOptionProgresive}
        setSelectedOptionProgresive={setSelectedOptionProgresive}
        selectedOptionGlass={selectedOptionGlass}
        setSelectedOptionGlass={setSelectedOptionGlass}
        inputsRightValue={inputsRightValue}
        setInputsRightValue={setInputsRightValue}
        inputsLeftValue={inputsLeftValue}
        setInputsLeftValue={setInputsLeftValue}
      />
    </PositionProducts>
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
  }
`

export default Products
