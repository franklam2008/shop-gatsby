import React from "react"
import { graphql } from "gatsby"
//lib
import { Container, Divider, Card } from "semantic-ui-react"
//components
import Layout from "../components/layout"
import Product from "../components/product"
//CSS
import SEO from "../components/seo"
import styled from "styled-components"
import "semantic-ui-css/semantic.min.css"

const ProductsCon = styled.div`
  .card {
    text-align: center;
    margin: 0 auto;
    .gatsby-image-wrapper {
      text-align: center;
      margin: 0 auto;
    }
  }
`

export default function shop({ data }) {
  console.log("log", data.menu.edges)
  return (
    <Layout>
      <SEO title="Shop" />
      <Container>
        <h1>Product</h1>
        <p>
          We are excited to share some of our popular teas and botanicals with a
          blend of tradition and innovation. It is our mission to connect you to
          the gardens and mountains where we source organic teas and botanicals.
          This practice is the foundation of our next-level tea quality and
          blending innovation.
        </p>
        <Divider />
        <ProductsCon>
          <Card.Group centered>
            {data.menu.edges.map(({ node: product }) => (
              <Product product={product} key={product.id} />
            ))}
          </Card.Group>
        </ProductsCon>
      </Container>
    </Layout>
  )
}
export const query = graphql`
  {
    menu: allContentfulTeaProducts {
      edges {
        node {
          id
          title
          productPrice
          productImg {
            fixed(width: 200, height: 200) {
              ...GatsbyContentfulFixed
            }
          }
          productDescription {
            content {
              content {
                value
              }
            }
          }
        }
      }
    }
  }
`
