import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from About</h1>
    <p>Welcome to About.</p>
    <Link to="/shop/">Go back to the shop</Link>
  </Layout>
)

export default About
