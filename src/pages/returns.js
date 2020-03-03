import React from "react"
import { Link,  } from "gatsby"
import { Container,  } from "semantic-ui-react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Returns = () => (
  <Layout>
    <SEO title="returns" />
    <Container>
      <h1>Returns &amp; Refunds</h1>
      <p>
        How do I Return my package/ Get a refund on it? If for any reason you
        are not satisfied with your order, we have a 30 day Money Back
        Guarantee. Simply message our customer support - Support@FitTea.com -
        and we will get back to you within the next business day.
      </p>
      <Link to="/shop/">Go back to the Shop</Link>
    </Container>
  </Layout>
)

export default Returns
