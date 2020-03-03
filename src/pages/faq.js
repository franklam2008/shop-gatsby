import React from "react"
import { Link } from "gatsby"
import { Container, Accordion, Grid } from "semantic-ui-react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Panel1 = [
  {
    key: "Q1",
    title: "When do I drink the tea?",
    content: {
      content: "Drink the tea every morning with or without breakfast ",
    },
  },
  {
    key: "Q2",
    title: "How do I make the tea?",
    content: {
      content: ` Place 1 teabag into a cup of near boiling water for 3-5 minutes. Remove
    tea bag and enjoy. (Cold or Hot). Visit the Directions page for more
    information`,
    },
  },
  {
    key: "Q3",
    title: "Can I add flavor to the tea?",
    content: {
      content: `Adding honey or lemon will help make the tea taste better.`,
    },
  },
]
const Panel2 = [
  {
    key: "Q1",
    title: "When do I drink the tea?",
    content: {
      content: "Drink the tea every morning with or without breakfast ",
    },
  },
  {
    key: "Q2",
    title: "How do I make the tea?",
    content: {
      content: ` Place 1 teabag into a cup of near boiling water for 3-5 minutes. Remove
    tea bag and enjoy. (Cold or Hot). Visit the Directions page for more
    information`,
    },
  },
  {
    key: "Q3",
    title: "Can I add flavor to the tea?",
    content: {
      content: `Adding honey or lemon will help make the tea taste better.`,
    },
  },
]
const FAQPage = styled.div`
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

const FAQ = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "teaIcon.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="FAQ" />
      <FAQPage>
        <Container>
          <h1>Frequently Asked Questions</h1>
          <p>Welcome to our FAQ page.</p>
          <Grid columns={2} stackable reversed="mobile">
            <Grid.Column>
              <h2>Prepare The Tea</h2>
              <Accordion defaultActiveIndex={0} panels={Panel1} styled />
            </Grid.Column>
            <Grid.Column>
              <h2>Prepare The Tea</h2>
              <Accordion defaultActiveIndex={0} panels={Panel2} styled />
            </Grid.Column>
            <Grid.Column>
              <h2>Prepare The Tea</h2>
              <Accordion defaultActiveIndex={0} panels={Panel2} styled />
            </Grid.Column>
            <Grid.Column>
              <h2>Prepare The Tea</h2>
              <Accordion defaultActiveIndex={0} panels={Panel2} styled />
            </Grid.Column>
          </Grid>

          <h4>Have a question?</h4>
          <p>
            Not finding what you're looking for?
            <Link to="/contact/"> Contact Us Directly</Link>
          </p>
        </Container>
      </FAQPage>
    </Layout>
  )
}

export default FAQ
