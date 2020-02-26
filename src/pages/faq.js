import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FAQ = () => (
  <Layout>
    <SEO title="FAQ" />
    <h1>Hi from the FAQ</h1>
    <p>Welcome to FAQ.</p>
    <Link to="/shop/">Go back to the shop</Link>
  </Layout>
)

export default FAQ
