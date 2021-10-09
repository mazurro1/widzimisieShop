import React from "react"
import styled from "styled-components"
import { Title, Colors } from "../common"
import {
  FaMobileAlt,
  FaMailBulk,
  FaFacebookSquare,
  FaInstagram,
} from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import UE from "../images/ue.png"

const StyledIframe = styled.iframe`
  width: 100%;
  height: calc(50vh - 135px);
  margin-top: 132px;

  @media all and (max-width: 768px) {
    margin-top: 57px;
  }
`

const Field = styled.div`
  display: block;
  text-align: center;
  margin: 0 auto;
  border: none;
  background-color: white;
  margin-bottom: 20px;
  cursor: auto !important;
  .text {
    font-size: 1.5rem;
    font-family: "optima-light" !important;
  }
  .field {
    position: relative;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    border: 1px solid #e0e0e0;
    background-color: white;
    margin: 0 auto;
    font-family: "optima-bold" !important;
    letter-spacing: 0.1rem;
    padding-left: 40px;
    padding-right: 40px;
  }

  .icon {
    position: absolute;
    top: 0;
    left: 10px;
    font-size: 1.3rem;
  }
`

const FacebookIcon = styled.div`
  color: #3b5998;
  text-align: center;
  font-size: 2rem;
  transition-property: transform;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  &:hover {
    transform: scale(1.7);
  }
`

const InstagramIcon = styled.div`
  color: #f50057;
  text-align: center;
  font-size: 2rem;
  transition-property: transform;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  &:hover {
    transform: scale(1.7);
  }
`

const ContainerLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 60px;
`

const LinkItem = styled.div`
  width: 100px;
`

const AdressContent = styled.div`
  text-align: center;
  .title {
    font-size: 1.2rem;
    display: inline-block;
    font-size: 1.5rem;
    font-family: "optima-light" !important;
  }

  .content {
    font-family: "optima-bold" !important;
  }

  .marginComponent {
    margin-bottom: 60px;
  }
`

const getData = graphql`
  {
    contentfulPageContact {
      eMail
      phoneNumber
      facebookLink
      instagramLink
      companyAdress
      openingHoursMondayFriday
      openingHoursSaturday
      openingHoursSunday
    }
  }
`

const Contact = ({ noSeo = false }) => {
  const {
    contentfulPageContact: {
      eMail: eMail,
      phoneNumber: phoneNumber,
      facebookLink: facebookLink,
      instagramLink: instagramLink,
      companyAdress: companyAdress,
      openingHoursMondayFriday: openingHoursMondayFriday,
      openingHoursSaturday: openingHoursSaturday,
      openingHoursSunday: openingHoursSunday,
    },
  } = useStaticQuery(getData)
  return (
    <>
      {!!!noSeo && <SEO title="Kontakt" description="Kontakt" />}
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

        <AdressContent className="row">
          <div className="col-md-6 col-12">
            <div className="row">
              <div className="col-12 marginComponent">
                <div className="title">Adres:</div>
                <div>{companyAdress}</div>
              </div>
              <div className="col-12 marginComponent">
                <div className="title">Godziny otwarcia:</div>
                <div>
                  Poniedziałek - Piątek:{" "}
                  <span className="content">{openingHoursMondayFriday}</span>
                </div>
                <div>
                  Sobota:{" "}
                  <span className="content">{openingHoursSaturday}</span>
                </div>
                <div>
                  Niedziela:{" "}
                  <span className="content">{openingHoursSunday}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-12">
            <img src={UE} alr="" />
          </div>
        </AdressContent>
        <ContainerLinks>
          <LinkItem>
            <a href={facebookLink} target="__blank">
              <FacebookIcon>
                <FaFacebookSquare />
              </FacebookIcon>
            </a>
          </LinkItem>
          <LinkItem>
            <a href={instagramLink} target="__blank">
              <InstagramIcon>
                <FaInstagram />
              </InstagramIcon>
            </a>
          </LinkItem>
        </ContainerLinks>
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="text-center">
              <Field>
                <div className="text">Numer telefonu:</div>
                <div className="field">
                  <div className="icon">
                    <FaMobileAlt />
                  </div>
                  {phoneNumber}
                </div>
              </Field>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="text-center">
              <Field>
                <div className="text">Email:</div>
                <div className="field">
                  <div className="icon">
                    <FaMailBulk />
                  </div>
                  {eMail}
                </div>
              </Field>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
