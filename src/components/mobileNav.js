import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Icon } from "semantic-ui-react"
const MobileNav = styled.div`
  background-color: var(--baseGreenLight);
  display: none;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 10px 0 3px 0;
  a,
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--subTextSaved);
    cursor: pointer;
    i {
      font-size: 18px;
    }
    span {
      font-size: 12px;
    }
    &:hover {
    color: var(--subTextSaved);
    }
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-evenly;
  }
`
export default function mobileNav() {
  return (
    <MobileNav>
      <Link to="/">
        <Icon name="home" />
        <span>Home</span>
      </Link>
      <Link to="/shop/">
        <Icon name="coffee" />
        <span>Product</span>
      </Link>
      <Link to="/contact/">
        <Icon name="phone" />
        <span>Contact Us</span>
      </Link>
      <div>
        <Icon className="snipcart-checkout" name="shopping cart" />
        <span>Cart</span>
      </div>
    </MobileNav>
  )
}
