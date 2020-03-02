import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import HomePage from "../components/homePage"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <HomePage />
    </Layout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default IndexPage
