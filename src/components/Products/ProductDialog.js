import React, { useState } from "react"
import styled from "styled-components"
import SelectProgresiv from "./SelectProgresiv"
import { CSSTransition } from "react-transition-group"
import { Colors } from "../../common"
import SelectGlassesModal from "./SelectGlassesModal"

const BigDialog = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
`

const Dialog = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 1000;
  min-height: 50vh;
  width: 80vw;
  padding: 20px;
  padding-bottom: 50px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.5);
`

const Line = styled.div`
  width: 40px;
  max-width: 80%;
  height: 2px;
  background-color: ${Colors.second};
  margin: 20px auto;
  margin-bottom: 20px;
`

const Buttons = styled.div`
  position: absolute;
  bottom: 15px;
  right: 20px;

  button {
    transition-property: background-color;
    transition-duration: 0.3s;
    transition-timing-function: ease;
  }

  .accept {
    border: none;
    background-color: ${Colors.second};
    border-radius: 5px;
    color: white;
    padding: 2px 20px;

    &:hover {
      background-color: ${Colors.secondDark};
    }
  }

  .cancel {
    border: none;
    background-color: ${Colors.basic};
    border-radius: 5px;
    color: white;
    padding: 2px 20px;

    &:hover {
      background-color: ${Colors.basicDark};
    }
  }
`

const CustomInputAge = styled.div`
  .ageText {
    color: ${Colors.second};
    font-weight: 700;
    font-size: 0.9rem;
  }

  input {
    border: 2px solid #212121;
    border-radius: 5px;
    padding: 5px 10px;
    transition-property: border;
    transition-duration: 0.3s;
    transition-timing-function: ease;

    &:active,
    &:focus {
      outline: none;
    }

    &:focus {
      border: 2px solid ${Colors.second};
    }
  }
`

export default function ProductDialog({
  dialogOpen,
  setDialogOpen,
  setSelectedOptionProgresive,
  selectedOptionProgresive,
  selectedOptionGlass,
  setSelectedOptionGlass,
  inputsRightValue,
  setInputsRightValue,
  inputsLeftValue,
  setInputsLeftValue,
  age,
  setAge,
}) {
  const handleAdd = () => {
    setDialogOpen(false)
    setInputsRightValue(prevState => ({
      ...prevState,
      add: "",
    }))
  }

  const handleClose = () => {
    setDialogOpen(false)
    if (Number(inputsLeftValue.add) > 0) {
      setInputsLeftValue(prevState => ({
        ...prevState,
        add: "",
      }))
    }
    if (Number(inputsRightValue.add) > 0) {
      setInputsRightValue(prevState => ({
        ...prevState,
        add: "",
      }))
    }
  }

  const handleChangeAge = e => {
    if (e.target.value < 120 && e.target.value >= 0) {
      setAge(e.target.value)
    }
  }

  const handleAgeBlud = e => {
    if (e.target.value > 120) {
      setAge(120)
    }
    if (e.target.value < 0 || e.target.value === "") {
      setAge(0)
    }
  }

  const validSelectProgresiv =
    age >= 40 ? (
      <>
        <SelectGlassesModal
          setSelectedOptionGlass={setSelectedOptionGlass}
          selectedOptionGlass={selectedOptionGlass}
        />
        {selectedOptionGlass.label === "Progresywne" ? (
          <div className="mt-4">
            <SelectProgresiv
              selectedOptionProgresive={selectedOptionProgresive}
              setSelectedOptionProgresive={setSelectedOptionProgresive}
            />
          </div>
        ) : null}
      </>
    ) : null

  return (
    <CSSTransition
      in={dialogOpen}
      timeout={300}
      classNames="opacity"
      unmountOnExit
    >
      <BigDialog>
        <Dialog>
          <div className="container mb-4">
            <h2 className="text-center">Wybierz wiek, oraz soczewki</h2>
            <Line />
            <CustomInputAge>
              <div className="ageText">Wpisz wiek:</div>
              <input
                type="number"
                value={age}
                placeholder="Twój wiek"
                onChange={handleChangeAge}
                max="120"
                onBlur={handleAgeBlud}
              />
            </CustomInputAge>
          </div>

          {validSelectProgresiv}

          <div className="container">
            <Buttons>
              <button onClick={handleClose} className="cancel">
                Close
              </button>
              <button onClick={handleAdd} className="accept ml-2">
                ok
              </button>
            </Buttons>
          </div>
        </Dialog>
      </BigDialog>
    </CSSTransition>
  )
}
