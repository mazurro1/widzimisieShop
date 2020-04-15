import React from "react"
import styled from "styled-components"
import { Title } from "../common"

const StyledIframe = styled.iframe`
  width: 100%;
  height: calc(50vh - 88px);
  margin-top: 88px;
`

const Contact = props => (
  <>
    <StyledIframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2517.79401891171!2d20.6331563157467!3d50.872012979535675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471827939ae594c9%3A0x26b94738cb9e3e68!2sSalon%20Optyczny%20-%20Twoje%20Widzimisi%C4%99%20-%20Optyk%20Kielce%20-%20okulary%20progresywne%2C%20przeciws%C5%82oneczne!5e0!3m2!1spl!2spl!4v1586897017137!5m2!1spl!2spl"
      width="600"
      height="450"
      frameBorder="0"
      style={{ border: 0 }}
      allowFullScreen
    ></StyledIframe>
    <div className="container">
      <Title>Kontakt</Title>
    </div>
  </>
)

export default Contact
