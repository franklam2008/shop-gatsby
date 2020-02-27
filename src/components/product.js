import React from "react"
import { Card } from "semantic-ui-react"
import styled from "styled-components"
import Img from "gatsby-image"
const ProductHeader = styled.div`
  color: var(--darkSaved);
  font-family: monospace;
`
export default function product({ product }) {
  return (
    <Card>
      <Img fixed={product.productImg.fixed} />
      <Card.Content>
        <Card.Header>
          <ProductHeader>{product.title}</ProductHeader>
        </Card.Header>
        <Card.Meta>
          <span>$ {product.productPrice}</span>
        </Card.Meta>
        <Card.Description>
          {product.productDescription.content[0].content[0].value}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <button
          className="snipcart-add-item"
          data-item-id={product.id}
          data-item-price={product.productPrice}
          data-item-url="https://shop-gatsby.netlify.com/shop/"
          data-item-description={
            product.productDescription.content[0].content[0].value
          }
          data-item-image={product.productImg.fixed.src}
          data-item-name={product.title}
        >
          Buy Now
        </button>
      </Card.Content>
    </Card>
  )
}
