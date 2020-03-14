import React from "react"
import styled from "styled-components"
import { Form, Button } from "semantic-ui-react"
import bgImg from "../../images/computer.jpg"
import { Container } from "semantic-ui-react"

// import Img from "gatsby-image"
const NewsletterCon = styled.div`
  background-image: url(${bgImg});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */

  text-align: right;
  padding: 70px 30px;
  h3 {
    font-size: 3.5rem;
    font-family: "Nunito";
    opacity: 0.85;
  }
  .form {
    text-align: center;
    display: flex;
    justify-content:flex-end;
    margin: 0 auto;
  }
  .field {
    margin-bottom: 0 !important;
    input {
    }
  }
  @media (max-width: 768px) {
    padding-bottom: 70px;
    .FooterNavCon {
      flex-direction: column;
    }
  }
`
export default function newsletter() {
  return (
    <NewsletterCon>
      <Container>
        <h3>Stay Connected</h3>
        <p>Join our mailing list to learn more</p>
        <Form success>
          <Form.Input placeholder="joe@schmoe.com" />
          <Button>submit</Button>
        </Form>
      </Container>
    </NewsletterCon>
  )
}
