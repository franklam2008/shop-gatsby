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
  margin: 0 auto;
  margin-bottom: 1.45rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
const NavLeft = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  img {
    max-width: 50px;
    max-height: 50px;
    margin: 0;
  }
`
const NavRight = styled.div`
  i {
    color: var(--baseBlack);
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
