import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Button from "@material-ui/core/Button"
import { Colors } from "../../common"
import Tooltip from "@material-ui/core/Tooltip"

const ButtonChangeProgresiv = styled.button`
  border: none;
  padding: 5px 10px;
  background-color: ${Colors.second};
  border-radius: 5px;
  color: white;
  margin-bottom: 50px;

  &:hover {
    background-color: ${Colors.secondDark};
  }
`

const PositionAbsolute = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
`
const BoldDiv = styled.div`
  h3 {
    display: inline-block;
  }
  span {
    font-size: 1.2rem;
    margin-left: 10px;
  }
`

const SummaryDiv = styled.div`
  text-align: right;

  h2 {
    display: inline-block;
  }
  span {
    font-size: 1.4rem;
    margin-left: 10px;
    background-color: #f44336;
    padding: 5px 10px;
    color: white;
  }
`

const InputStyle = styled.input`
  letter-spacing: 3px;
  padding: 10px 15px;
  padding-left: 55px;
  border-radius: 5px;
  border: 2px solid ${Colors.basic};
  transition-property: border;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  ::placeholder {
    letter-spacing: 0;
    font-size: 0.7rem;
  }

  &:focus {
    outline: none;
    border: 2px solid ${Colors.second};
  }
  &:active {
    outline: none;
  }
`

const PositionRelative = styled.div`
  position: relative;
  overflow: hidden;
`

const TextNumberInInput = styled.div`
  position: absolute;
  left: 0;
  top: 49%;
  transform: translateY(-50%);
  border-bottom-left-radius: 2px;
  border-top-left-radius: 2px;
  padding: 12px;
  color: ${Colors.basicDark};
  font-weight: bold;
`

const ButtonStyle = styled.div`
  button {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 1rem;
    color: white;
    background-color: ${Colors.second};
    padding: 10px 20px;
    color: ${Colors.basicDark};
    &:hover {
      background-color: ${Colors.secondDark};
    }
  }
`

const TextNumber = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  /* color: ${Colors.second}; */
`
const DisplayLabels = styled.div`
  position: absolute;
  left: -1000%;
`

const PositionDisplayLabel = styled.div`
  position: relative;
  overflow: hidden;
`

const ProductSummary = ({
  valselectedTypeOfGlasses,
  selectedTypeOfSex,
  selectedProduct,
  selectGlassValue,
  extraOptionsValue,
  selectionPrice,
  otherExtraPirce,
  selectedOptionProgresive,
  selectedOptionGlass,
  setDialogOpen,
  setGoBackToExtraOption,
  activeStep,
  age,
}) => {
  const [phoneNumber, setPhoneNumber] = useState("")

  const handleChangePhoneNumber = e => {
    if (Number.isInteger(Number(e.target.value))) {
      setPhoneNumber(e.target.value)
    }
  }
  const handleSendEmail = () => {}

  const defaultExtraOption = {
    id: 0,
    title: "-",
    content: "",
    priceBasic: 0,
    priceSecond: 0,
  }

  useEffect(() => {
    if (extraOptionsValue.id === 7 && selectionPrice === "priceBasic") {
      setGoBackToExtraOption(true)
    }
  }, [extraOptionsValue, selectionPrice])

  // useEffect(() => {
  //   if (
  //     activeStep === 5 &&
  //     selectionPrice === "priceThird" &&
  //     Number(age) > 40 &&
  //     selectedOptionGlass.label === "Progresywne"
  //   ) {
  //     setGoBackToExtraOption(true)
  //   }
  // }, [selectionPrice, age, activeStep, selectedOptionGlass])

  const validationExtraOptionsValue =
    extraOptionsValue.id === 7 && selectionPrice === "priceBasic"
      ? defaultExtraOption
      : extraOptionsValue

  const extraPriceSelectedProgresive =
    selectionPrice === "priceThird" ? selectedOptionProgresive.price : 0

  const finallyPrice =
    selectedProduct.price +
    selectGlassValue.price +
    validationExtraOptionsValue[selectionPrice] +
    otherExtraPirce +
    extraPriceSelectedProgresive

  const DisabledInputs =
    valselectedTypeOfGlasses &&
    selectedTypeOfSex &&
    selectedProduct.producer &&
    selectedProduct.model &&
    selectGlassValue.title &&
    validationExtraOptionsValue.title ? (
      <>
        <label>
          <input
            type="text"
            name="Typ okularów"
            value={valselectedTypeOfGlasses}
            onChange={handleSendEmail}
          />
        </label>
        <label>
          <input
            type="text"
            name="Rodzaj okularów"
            value={selectedTypeOfSex}
            onChange={handleSendEmail}
          />
        </label>
        <label>
          <input
            type="text"
            name="Marka okularów"
            value={selectedProduct.producer}
            onChange={handleSendEmail}
          />
        </label>
        <label>
          <input
            type="text"
            name="Model okularów"
            value={selectedProduct.model}
            onChange={handleSendEmail}
          />
        </label>
        <label>
          <input
            type="text"
            name="Szkła"
            value={selectGlassValue.title}
            onChange={handleSendEmail}
          />
        </label>
        <label>
          <input
            type="text"
            name="Dodatkowe opcje"
            value={validationExtraOptionsValue.title}
            onChange={handleSendEmail}
          />
        </label>
        <label>
          <input
            type="text"
            name="Szkła progresywne"
            value={selectedOptionProgresive.label}
            onChange={handleSendEmail}
            disabled={
              selectionPrice === "priceThird" &&
              selectedOptionGlass.label === "Progresywne"
                ? false
                : true
            }
          />
        </label>
        <label>
          <input
            type="text"
            name="Numer telefonu"
            value={phoneNumber}
            onChange={handleSendEmail}
          />
        </label>
        <label>
          <input
            type="text"
            name="Cena"
            value={finallyPrice}
            onChange={handleSendEmail}
          />
        </label>
      </>
    ) : null

  return (
    <PositionAbsolute>
      <div className="container mt-5 mb-5">
        {selectionPrice === "priceThird" ? (
          <ButtonChangeProgresiv
            onClick={() => {
              setDialogOpen(true)
            }}
          >
            Zmień soczewki progresywne
          </ButtonChangeProgresiv>
        ) : null}
        <h1 className="text-center">Podsumowanie</h1>
        <div className="row">
          <BoldDiv className="col-12">
            <h3>Typ okularów:</h3>
            <span>{valselectedTypeOfGlasses}</span>
          </BoldDiv>
          <BoldDiv className="col-12">
            <h3>Rodzaj okularów:</h3>
            <span>{selectedTypeOfSex}</span>
          </BoldDiv>
          <BoldDiv className="col-12">
            <h3>Marka okularów:</h3>
            <span>{selectedProduct.producer}</span>
          </BoldDiv>
          <BoldDiv className="col-12">
            <h3>Model okularów:</h3>
            <span>{selectedProduct.model}</span>
          </BoldDiv>
          <BoldDiv className="col-12">
            <h3>Szkła:</h3>
            <span>{selectGlassValue.title}</span>
          </BoldDiv>
          <BoldDiv className="col-12">
            <h3>Dodatkowe opcje:</h3>
            <span>{validationExtraOptionsValue.title}</span>
          </BoldDiv>
          {selectionPrice === "priceThird" &&
          selectedOptionGlass.label === "Progresywne" ? (
            <BoldDiv className="col-12">
              <h3>Soczewki progresywne:</h3>
              <span>{selectedOptionProgresive.label}</span>
            </BoldDiv>
          ) : null}
          <SummaryDiv className="col-12">
            <h2>Cena ostateczna:</h2>
            <span>{finallyPrice} zł</span>
          </SummaryDiv>
          <div className="col-12">
            <form
              action="https://formspree.io/mazul96.hm@gmail.com"
              method="POST"
            >
              <TextNumber>Numer telefonu:</TextNumber>
              <PositionRelative>
                <InputStyle
                  type="text"
                  maxLength="9"
                  minLength="8"
                  placeholder="Wpisz swój numer kontaktowy"
                  value={phoneNumber}
                  onChange={handleChangePhoneNumber}
                  required
                />
                <TextNumberInInput>+48</TextNumberInInput>
              </PositionRelative>
              <PositionDisplayLabel>
                <DisplayLabels>{DisabledInputs}</DisplayLabels>
              </PositionDisplayLabel>
              <ButtonStyle className="text-center mt-4">
                <Tooltip
                  title="Wpisz numer aby wysłać zamówienie"
                  placement="top"
                >
                  <Button type="submit" value="Send">
                    Wyślij
                  </Button>
                </Tooltip>
              </ButtonStyle>
            </form>
          </div>
        </div>
      </div>
    </PositionAbsolute>
  )
}
export default ProductSummary
