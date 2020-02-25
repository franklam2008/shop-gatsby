import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
//lib
// import axios from "axios";
import { Container } from "semantic-ui-react"
import { Card} from "semantic-ui-react"
//pages
import Layout from "../components/layout"
//CSS
import SEO from "../components/seo"
import styled from "styled-components"
import "semantic-ui-css/semantic.min.css"
const Header = styled.div`
  color: blue;
`
export default function shop({ data }) {
  console.log("log", data.menu.edges)
  return (
    <Layout>
      <SEO title="Shop" />
      <Container>
        {data.menu.edges.map(element => (
          <Card key={element.node.id}>
            <Card.Content>
              <Card.Header>
                <Header>{element.node.title}</Header>
              </Card.Header>
              <Card.Meta>
                <span className="date">Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                <Img fixed={element.node.productImg.fixed} />

                <div>
                  {element.node.productDescription.content[0].content[0].value}
                </div>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div>$ {element.node.productPrice}</div>
              <button
                className="snipcart-add-item"
                data-item-id={element.node.id}
                data-item-price={element.node.productPrice}
                data-item-url="/paintings/starry-night"
                data-item-description={
                  element.node.productDescription.content[0].content[0].value
                }
                data-item-image={element.node.productImg.fixed.src}
                data-item-name={element.node.title}
              >
                Add to cart
              </button>
              <button className="snipcart-checkout">
                Click here to checkout
              </button>
            </Card.Content>
          </Card>
        ))}
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
              ...GatsbyContentfulFixed_tracedSVG
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
