import React from "react"
import { Card, Button, Rating } from "semantic-ui-react"
import styled from "styled-components"
import Img from "gatsby-image"
import VSensorjs from "../VisibilitySensor"
const ProductHeader = styled.div`
  margin-top: 5px;
  color: var(--darkSaved);
`
const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 5px 5px;
  div {
    color: green;
  }
`
export default function product({ product, max }) {
  return (
    <VSensorjs>
      <Card>
        <Card.Content>
          <Img fixed={product.productImg.fixed} />
          <Card.Header>
            <ProductHeader>{product.title}</ProductHeader>
          </Card.Header>
          <Card.Description>
            {product.productDescription.content[0].content[0].value}
          </Card.Description>{" "}
          <CardFooter>
            <div>
              <div>$ {product.productPrice}</div>
              <Rating icon="star" defaultRating={4} maxRating={5} disabled />
            </div>

            <Button
              color="green"
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
            </Button>
          </CardFooter>
        </Card.Content>
      </Card>
    </VSensorjs>
  )
}
