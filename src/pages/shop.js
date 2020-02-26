import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { graphql }from "gatsby"
//lib
import { Container } from "semantic-ui-react"
import { Card } from "semantic-ui-react"
//pages
import Layout from "../components/layout"
//CSS
import SEO from "../components/seo"
import styled from "styled-components"
import "semantic-ui-css/semantic.min.css"
const Header = styled.div`
  color: var(--darkSaved);
  font-family: monospace;
`

export default function shop({ data }) {
  console.log("log", data.menu.edges)
  return (
    <Layout>
      <SEO title="Shop" />
      <Container>
        <Card.Group centered>
        
          {data.menu.edges.map(({ node: product }) => (
            <Card key={product.id}>
              <Card.Content>
                <Card.Header>
                  <Header>{product.title}</Header>
                </Card.Header>
                <Card.Meta>
                  <span className="date">Joined in 2015</span>
                </Card.Meta>
                <Img fixed={product.productImg.fixed} />

                <Card.Description>
                  {product.productDescription.content[0].content[0].value}
                </Card.Description>
              </Card.Content>
              <Card.Content>
                <span>$ {product.productPrice}</span>
                <button
                  className="snipcart-add-item"
                  data-item-id={product.id}
                  data-item-price={product.productPrice}
                  data-item-url="https://hopeful-hoover-997c24.netlify.com/shop/"
                  data-item-description={
                    product.productDescription.content[0].content[0].value
                  }
                  data-item-image={product.productImg.fixed.src}
                  data-item-name={product.title}
                >
                  Add to cart now
                </button>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Container>
      <Link to="/page-3/">Go back to the page 3</Link>
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
