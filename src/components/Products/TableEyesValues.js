import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Colors } from "../../common"

const InputStyle = styled.input`
  width: 100px;
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

    @media (min-width: 1280px) {
      display: table;
    }
    
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

const TableEyesValues = ({ setSelectionPrice, setOtherExtraPrice }) => {
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

  useEffect(() => {
    if (
      (inputsLeftValue.add <= 4 && inputsLeftValue.add >= 1) ||
      (inputsRightValue.add <= 4 && inputsRightValue.add >= 1)
    ) {
      console.log("xd1")
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
  }, [inputsLeftValue, inputsRightValue, setSelectionPrice])

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
    <StyleTable className="">
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
      <div className="container">
        <RequredFieldText>
          <span>*</span> - wymagane pola
        </RequredFieldText>
      </div>
    </StyleTable>
  )
}
export default TableEyesValues
