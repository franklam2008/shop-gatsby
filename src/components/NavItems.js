import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
const NavItemsCon = styled.div`
  a {
    color: var(--baseBlack);
    opacity: 0.8;
    text-decoration: none;
    margin-left: 1.5rem;
    font-size: 1.2rem;
    font-weight:300;
    transform: scale(1, 0.1);
    display: inline-block;
    transform: scale(1, 0.9);
    &:hover {
      opacity: 1;
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
      <Link to="/returns/">Policy</Link>
      <Link to="/about/">About</Link>
      <Link to="/faq/">FAQ</Link>
      <Link to="/contact/">Contact</Link>
    </NavItemsCon>
  )
}
