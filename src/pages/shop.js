import React from "react"
//lib
import { Container, Divider } from "semantic-ui-react"
//components
import Layout from "../components/layout"
import Products from "../components/Products/Products"
//CSS
import SEO from "../components/seo"
import Test from "../components/test"
import "semantic-ui-css/semantic.min.css"

export default () => {

  return (
    <Layout>
      <SEO title="Shop" />
      <Container>
        <h1>New Products</h1>
        <Test />
        <p>
          We are excited to share some of our popular teas and botanicals with a
          blend of tradition and innovation. It is our mission to connect you to
          the gardens and mountains where we source organic teas and botanicals.
          This practice is the foundation of our next-level tea quality and
          blending innovation.
        </p>
        <Divider />
        <Products />
      </Container>
    </Layout>
  )
}
