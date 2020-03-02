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
import MobileNav from "./mobileNav"
//css
import "./css/layout.css"
const FullPage = styled.div`
  min-height: 100vh;
  /* background-color:lightblue; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`
const MainCon = styled.div`
  flex: 1;
  text-align: left;
`
const Layout = ({ children }) => {
  return (
    <FullPage>
      <Promotion />
      <Header />
      <MainCon>{children}</MainCon>
      <Footer />
      <MobileNav />
    </FullPage>
  )
}

export default Layout
