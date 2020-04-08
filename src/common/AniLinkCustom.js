import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Colors } from "./consts"

export const AniLinkCustom = ({ children, to }) => {
  return (
    <AniLink cover to={to} bg={Colors.basicDark}>
      {children}
    </AniLink>
  )
}
