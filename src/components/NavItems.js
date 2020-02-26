import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
const NavItemsCon = styled.span`
  a {
    color: white;
    text-decoration: none;
    margin-right: 10px;
    font-size: 2em;
  }
`
export default function NavItems() {
  return (
    <NavItemsCon className="NavItemsCon">
      <Link to="/">Home</Link>
      <Link to="/shop/">Shop</Link>
      <Link to="/page-2/">Page-2</Link>
      <Link to="/page-3/">Page-3</Link>
    </NavItemsCon>
  )
}
