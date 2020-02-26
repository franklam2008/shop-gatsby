import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FAQ = () => (
  <Layout>
    <SEO title="FAQ" />
    <h1>Hi from the FAQ</h1>
    <p>Welcome to FAQ.</p>
    <h1>Prepare The Tea</h1>
    <h1>When do I drink the tea?</h1>
    <p>Drink the tea every morning with or without breakfast </p>
    <h1>How do I make the tea?</h1>
    <p>
      Place 1 teabag into a cup of near boiling water for 3-5 minutes. Remove
      tea bag and enjoy. (Cold or Hot). Visit the Directions page for more
      information
    </p>
    <h1>Can I add flavor to the tea?</h1>
    <p>Adding honey or lemon will help make the tea taste better. </p>

    <Link to="/shop/">Go back to the shop</Link>
  </Layout>
)

export default FAQ
