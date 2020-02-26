/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

// import React from "react";
import React from "react"
import styled from "styled-components"
import Header from "./header"
import Promotion from "./promotion"
import Footer from "./footer"
//css
import "./css/layout.css"
const MainCon = styled.div`
  margin: 0 auto;
  min-height:80vh;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
`
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Promotion />
      <Header />
      <MainCon>
        <main>{children}</main>
      </MainCon>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
