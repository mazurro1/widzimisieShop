import React, { useEffect } from "react"
import Layout from "../components/layout"
import axios from "axios"

const Visit = props => {
  return (
    // <Layout history={props.location}>
    <iframe
      id="inlineFrameExample"
      title="Inline Frame Example"
      width="100%"
      height="1000px"
      src="https://www.rodenstock.com/pl/pl/oprawy-okularowe.html"
    ></iframe>
    // </Layout>
  )
}

export default Visit
