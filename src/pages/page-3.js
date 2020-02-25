import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Page3 = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the Page 3</h1>
    <p>About page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Page3
