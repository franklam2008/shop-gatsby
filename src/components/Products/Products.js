import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Card } from "semantic-ui-react"
import Product from "./product"
const ProductsCon = styled.div`
  padding-top: 20px;
  padding-bottom: 50px;
  .card {
    text-align: center;
    margin: 10px;
    margin-bottom: 20px !important;
    box-shadow: none;
    .gatsby-image-wrapper {
      width: 100px;
    }
  }
`
const Products = ({ max }) => {
  return (
    <StaticQuery
      query={graphql`
        {
          menu: allContentfulTeaProducts {
            edges {
              node {
                id
                title
                feature
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
      `}
      render={data => (
        <ProductsCon>
          <Card.Group centered>
            {data.menu.edges.slice(0, max).map(({ node: product }) => (
              <Product product={product} key={product.id} />
            ))}
          </Card.Group>
        </ProductsCon>
      )}
    ></StaticQuery>
  )
}
export default Products
