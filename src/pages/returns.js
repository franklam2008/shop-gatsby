import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Returns = () => (
  <Layout>
    <SEO title="returns" />
    <h1>Hi from the Page Returns</h1>
    <p>Welcome to Returns page</p>
    <Link to="/shop/">Go back to the Shop</Link>
  </Layout>
)

export default Returns