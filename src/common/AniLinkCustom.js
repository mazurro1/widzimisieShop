import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Colors } from "./consts"

export const AniLinkCustom = ({ children, to }) => {
  return (
    <AniLink paintDrip to={to} hex={Colors.basicDark}>
      {children}
    </AniLink>
  )
}
