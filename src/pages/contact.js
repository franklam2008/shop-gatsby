import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "semantic-ui-react"
import styled from "styled-components"
const ContactPage = styled.div`
  h4 {
    font-weight: 900;
    font-family: "Nunito";
  }
  p {
    text-align: center;
    a {
      color: var(--baseGreen);
      &:hover {
        text-decoration: underline;
      }
    }
  }
`

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <ContactPage>
      <Container>
        <h1>Contact Us</h1>
        <p>support@greatearthtea.com</p>

        <p>
          Hours: Monday - Friday 10am - 5pm eastern Time.Closed Saturday and
          Sunday.
        </p>

        <p>Estimated email response is 48 hours.</p>

        <p>
          Please provide in the email: Your name Order information Paypal email
          Shipping address
        </p>

        <p> This information helps speed up the process. Thank you!</p>

        <p>
          Contact Hey! We are friendly and will happily answer your questions.
          Reach out to us using the form below or write to happy@hellotea.club
          We'll respond as soon as we can. But first, don't forget to check our
          Frequently Asked Questions page for answers to most questions.
        </p>
      </Container>
    </ContactPage>
  </Layout>
)

export default Contact
