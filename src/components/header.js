import React from "react"
import { Link } from "gatsby"
//pages
import NavItems from "./NavItems"
//css
import styled from "styled-components"
import { Icon } from "semantic-ui-react"
//assets
import teaIcon from "../images/teaIcon.png"
const HeaderCon = styled.div`
  background: var(--baseWhite);
  width: 100%;
  margin: 0 auto;
  margin-bottom: 1.45rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 0;
 
`
const NavLeft = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  img {
    max-width: 30px;
  }
`
const NavRight = styled.div`
  i {
    cursor: pointer;
    color: var(--baseBlack);
    &:hover {
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
      <NavRight>
        <Icon className="snipcart-checkout" name="shopping cart" />
      </NavRight>
    </HeaderCon>
  )
}
