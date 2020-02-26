import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{data.site.siteMetadata.title}</h1>
      <h2>Want to stay healthy drink matcha.</h2>
      <p>
        Over 159 million Americans drink tea every day. Drinking tea every day
        has more health benefits than you think.
      </p>

      <Link to="/shop/">Shop</Link>
    </Layout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default IndexPage
