import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Colors } from "../../common"

const InputStyle = styled.input`
  width: 69.5px;
  margin: 0 auto;
  background-color: #eee;
  border-radius: 5px;
  border: none;
  padding: 5px 10px;
  &:focus,
  &:active {
    outline: none;
  }
`

const RequredFieldText = styled.div`
  position: relative;
  background-color: ${Colors.second};
  width: 200px;
  text-align: center;
  padding: 5px 10px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  /* font-weight: bold; */
  color: white;
`

const StyleTable = styled.div`
  /* margin-bottom: 100px; */
  min-height: calc(40vh - 89px);
  margin-bottom: 20px;


  span {
    /* color: ${Colors.second}; */
    /* font-weight: bold; */
  }

  table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
    border-right: 1px solid #dee2e6;
    border-left: 1px solid #dee2e6;

    @media (min-width: 1280px) {
      display: table;
    }
    
  }

  td:last-child{
    padding-right: 0.75rem;
  }

  thead{
    
    border: 1px solid;
  }

  table tbody thead {
    display: block;
    width: 100%;
  }

  th,
  td {
    padding-left: 10px !important;
  }

  th {
    font-size: 0.9rem;
    font-weight: 500;
    background-color: ${Colors.basic} !important;
  }
`

const TableEyesValues = ({
  setSelectionPrice,
  setOtherExtraPrice,
  inputsLeftValue,
  setInputsLeftValue,
  inputsRightValue,
  setInputsRightValue,
}) => {
  const handleOnChangeInputsLeft = (value, name) => {
    if (name === "add") {
      if (value <= 4) {
        setInputsLeftValue(prevState => ({
          ...prevState,
          [name]: value,
        }))
      }
    } else {
      setInputsLeftValue(prevState => ({
        ...prevState,
        [name]: value,
      }))
    }
  }

  const handleOnChangeInputsRight = (value, name) => {
    if (name === "add") {
      if (value <= 4) {
        setInputsRightValue(prevState => ({
          ...prevState,
          [name]: value,
        }))
      }
    } else {
      setInputsRightValue(prevState => ({
        ...prevState,
        [name]: value,
      }))
    }
  }

  const handleOnBlurLeft = (value, name) => {
    if (value === "") {
      setInputsLeftValue(prevState => ({
        ...prevState,
        [name]: 0,
      }))
    }
  }

  const handleOnBlurRight = (value, name) => {
    if (value === "") {
      setInputsRightValue(prevState => ({
        ...prevState,
        [name]: 0,
      }))
    }
  }

  const inputsLeft = [
    {
      value: inputsLeftValue.sfera,
      onChange: handleOnChangeInputsLeft,
      onBlur: handleOnBlurLeft,
      name: "sfera",
      required: true,
    },
    {
      value: inputsLeftValue.cylinder,
      onChange: handleOnChangeInputsLeft,
      onBlur: handleOnBlurLeft,
      name: "cylinder",
      required: true,
    },
    {
      value: inputsLeftValue.os,
      onChange: handleOnChangeInputsLeft,
      onBlur: handleOnBlurLeft,
      name: "os",
      required: true,
    },
    {
      value: inputsLeftValue.add,
      onChange: handleOnChangeInputsLeft,
      onBlur: handleOnBlurLeft,
      name: "add",
      required: false,
    },
    {
      value: inputsLeftValue.pd,
      onChange: handleOnChangeInputsLeft,
      onBlur: handleOnBlurLeft,
      name: "pd",
      required: true,
    },
    {
      value: inputsLeftValue.wysokosc,
      onChange: handleOnChangeInputsLeft,
      onBlur: handleOnBlurLeft,
      name: "wysokosc",
      required: false,
    },
    {
      value: inputsLeftValue.pryzmat,
      onChange: handleOnChangeInputsLeft,
      onBlur: handleOnBlurLeft,
      name: "pryzmat",
      required: false,
    },
    {
      value: inputsLeftValue.baza,
      onChange: handleOnChangeInputsLeft,
      onBlur: handleOnBlurLeft,
      name: "baza",
      required: false,
    },
  ]

  const inputsRight = [
    {
      value: inputsRightValue.sfera,
      onChange: handleOnChangeInputsRight,
      onBlur: handleOnBlurRight,
      name: "sfera",
      required: true,
    },
    {
      value: inputsRightValue.cylinder,
      onChange: handleOnChangeInputsRight,
      onBlur: handleOnBlurRight,
      name: "cylinder",
      required: true,
    },
    {
      value: inputsRightValue.os,
      onChange: handleOnChangeInputsRight,
      onBlur: handleOnBlurRight,
      name: "os",
      required: true,
    },
    {
      value: inputsRightValue.add,
      onChange: handleOnChangeInputsRight,
      onBlur: handleOnBlurRight,
      name: "add",
      required: false,
    },
    {
      value: inputsRightValue.pd,
      onChange: handleOnChangeInputsRight,
      onBlur: handleOnBlurRight,
      name: "pd",
      required: true,
    },
    {
      value: inputsRightValue.wysokosc,
      onChange: handleOnChangeInputsRight,
      onBlur: handleOnBlurRight,
      name: "wysokosc",
      required: false,
    },
    {
      value: inputsRightValue.pryzmat,
      onChange: handleOnChangeInputsRight,
      onBlur: handleOnBlurRight,
      name: "pryzmat",
      required: false,
    },
    {
      value: inputsRightValue.baza,
      onChange: handleOnChangeInputsRight,
      onBlur: handleOnBlurRight,
      name: "baza",
      required: false,
    },
  ]

  const mapLeftInputs = inputsLeft.map((item, index) => {
    const newPropsInput =
      item.name === "add"
        ? {
            max: 4,
          }
        : {}
    return (
      <td key={index}>
        <InputStyle
          type="number"
          value={item.value}
          onChange={e => item.onChange(e.target.value, e.target.name)}
          name={item.name}
          required={item.required}
          onBlur={e => item.onBlur(e.target.value, e.target.name)}
          {...newPropsInput}
        />
      </td>
    )
  })

  const mapRightInputs = inputsRight.map((item, index) => {
    const newPropsInput =
      item.name === "add"
        ? {
            max: 4,
          }
        : {}
    return (
      <td key={index}>
        <InputStyle
          type="number"
          value={item.value}
          onChange={e => item.onChange(e.target.value, e.target.name)}
          name={item.name}
          required={item.required}
          onBlur={e => item.onBlur(e.target.value, e.target.name)}
          {...newPropsInput}
        />
      </td>
    )
  })

  return (
    <StyleTable className="container">
      <table className="table m-0">
        <thead className="thead-dark">
          <tr>
            <th scope="col"></th>
            <th scope="col">
              Sfera<span>*</span>
            </th>
            <th scope="col">
              Cylinder<span>*</span>
            </th>
            <th scope="col">
              Oś<span>*</span>
            </th>
            <th scope="col">Add</th>
            <th scope="col">
              PD(rozstaw żrenic)<span>*</span>
            </th>
            <th scope="col">H(wysokość mont)</th>
            <th scope="col">Pryzmat</th>
            <th scope="col">Baza</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>OP (oko porawe)</td>
            {mapRightInputs}
          </tr>
          <tr>
            <td>OL (oko lewe)</td>
            {mapLeftInputs}
          </tr>
        </tbody>
      </table>
      <RequredFieldText>
        <span>*</span> - wymagane pola
      </RequredFieldText>
    </StyleTable>
  )
}
export default TableEyesValues
