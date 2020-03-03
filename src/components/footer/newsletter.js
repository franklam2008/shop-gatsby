import React from "react"
import styled from "styled-components"
import { Form, Button } from "semantic-ui-react"
// import bgImg from "../../images/berry.jpg"
// import Img from "gatsby-image"
const NewsletterCon = styled.div`
  text-align: center;
  padding-bottom: 50px;
  h3 {
    font-size: 1.5rem;
    font-family: "Nunito";
    opacity: 0.85;
  }
  .form {
    text-align: center;
    display: flex;
    max-width: 250px;
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
      <h3>Stay Connected</h3>
      <p>Join our mailing list to learn more</p>
      <Form success>
        <Form.Input placeholder="joe@schmoe.com" />
        <Button>submit</Button>
      </Form>
    </NewsletterCon>
  )
}
