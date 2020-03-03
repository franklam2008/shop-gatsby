import React from "react"
import { Link } from "gatsby"
import { Container } from "semantic-ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="Page two" />
    <Container>
      <h1>Hi from About</h1>
      <p>
        In the past, tea was a tool for rebellion and sparked wars. Now it's
        become a source of quiet and comfort. But not to us. To us, tea is an
        opportunity. To excite the senses. To surprise your taste buds. With a
        diverse range of bold flavors and bright colors. Hell, even “normal”
        flavors have some kind of weird or wonderful twist. No, Stash isn’t a
        bag of tea. It’s a little bag of crazy. And it’s about time we show it.
      </p>
      <Link to="/shop/">Go back to the shop</Link>
    </Container>
  </Layout>
)

export default About
