import React from "react"
import { useSiteMetadata } from "./hook/useStaticQuery"
import { useSiteImages } from "./hook/useSiteImages"
export default () => {
  const { title } = useSiteMetadata()
  const { edges } = useSiteImages()

  console.log("useSiteMetadata", title)
  console.log("useSiteImages", edges)
  console.log(
    "test",
    edges.filter(
      ({ node: skillNode }) =>
        skillNode.childImageSharp.fluid.originalName === "computer.jpg"
    )
  )
  return <></>
}
