// import React from "react"
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import NavItems from "./NavItems"

const HeaderCon = styled.div`
  background: var(--baseColorSaved);
  margin: 0 auto;
  margin-bottom: 1.45rem;
  maxwidth: 960;
  padding: 1.45rem 1.0875rem;
  h1 a {
    color: white;
    text-decoration: none;
  }
`
export default function Header({ siteTitle }) {
  console.log("123")
  return (
    <HeaderCon>
      <Link to="/">{siteTitle}</Link>

      <NavItems />
    </HeaderCon>
  )
}
