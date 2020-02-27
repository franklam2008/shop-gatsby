import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
const NavItemsCon = styled.div`
  a {
    color: var(--baseBlack);
    text-decoration: none;
    margin-left: 15px;
    font-size: 1.15rem;
    &:hover {
      color: var(--baseGreen);
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`
export default function NavItems() {
  return (
    <NavItemsCon className="NavItemsCon">
      <Link to="/">Home</Link>
      <Link to="/shop/">Shop</Link>
      <Link to="/returns/">Shipping &amp; Returns</Link>
      <Link to="/about/">About Us</Link>
      <Link to="/faq/">FAQ</Link>
      <Link to="/contact/">Contact Us</Link>
    </NavItemsCon>
  )
}
