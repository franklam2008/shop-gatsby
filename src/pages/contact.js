import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact Us</h1>
    <p>Support@FitTea.com</p>
    <p>
      Hours: Monday - Friday 10am - 5pm eastern Time.Closed Saturday and Sunday.
    </p>
    <p>Estimated email response is 48 hours.</p>
    <p>
      Please provide in the email: Your name Order information Paypal email
      Shipping address
    </p>
    <p> This information helps speed up the process. Thank you!</p>
    <Link to="/shop/">Go back to the Shop</Link>
  </Layout>
)

export default Contact
