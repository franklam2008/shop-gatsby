// import React from "react"
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import NavItems from "./NavItems"

const HeaderCon = styled.div`
  background: var(--baseColorSaved);
  margin: 0 auto;
  margin-bottom: 1.45rem;
  padding: 1.45rem 1.0875rem;
  display: flex;
  justify-content: space-evenly;


  a {
    color: white;
    text-decoration: none;
    font-size:2rem;
  }
`
export default function Header({ siteTitle }) {
  console.log("123")

  return (
    <HeaderCon>
      <div className="navLeft">
        <Link to="/">{siteTitle}</Link>

        <NavItems />
      </div>

      <button className="snipcart-checkout">Cart</button>
    </HeaderCon>
  )
}
