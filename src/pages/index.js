import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Menu from "../components/Menu"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Tea Product</h1>
    <p>Welcome to our new React E-commerce site.</p>
    <p>Take a look if you see what you like</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/shop/" >Shop</Link>
    <Menu  />
    
  </Layout>
)

export default IndexPage
