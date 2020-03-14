import React from "react"
import { Link } from "gatsby"
//pages
import NavItems from "./NavItems"
//css
import styled from "styled-components"
import { Icon } from "semantic-ui-react"
//assets
import teaIcon from "../images/logo.png"
const HeaderCon = styled.div`
  /* background: var(--baseWhite); */
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  margin-bottom: 1.45rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
`
const NavLeft = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  img {
    max-width: 140px;
  }
  @media (max-width: 768px) {
    width: 100%;
    img {
      margin: 0 auto;
    }
  }
`
const NavRight = styled.div`
  cursor: pointer;
  i {
    color: var(--baseBlack);
    margin-left: 10px;
  }
  &:hover {
    color: var(--baseGreen);
    i {
      color: var(--baseGreen);
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`
export default function Header() {
  return (
    <HeaderCon>
      <NavLeft>
        <Link to="/">
          <img src={teaIcon} alt="mainIcon" />
        </Link>
        <NavItems />
      </NavLeft>
      <NavRight className="snipcart-checkout">
        <span>Cart</span>
        <Icon name="shopping cart" />
      </NavRight>
    </HeaderCon>
  )
}
