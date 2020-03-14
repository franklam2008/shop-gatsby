import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { Container, Grid, Button } from "semantic-ui-react"
import { Link } from "gatsby"
import VSensorjs from "../components/VisibilitySensor"
import Products from "../components/Products/Products"
import productIcon from "../images/product_img.jpg"
import homepage_info_img_3 from "../images/homepage_info_img_3.png"

// import { useSiteMetadata } from "./hook/useStaticQuery"
import { useSiteImages } from "./hook/useSiteImages"

const HomeCon = styled.div`
  div.HomePageSubCon:nth-child(odd) {
    background: white;
  }
  div.HomePageSubCon:nth-child(even) {
    background-color: var(--baseGreenLight);
  }
`
const FirstCon = styled.div`
  padding: 120px 0;
  min-height: 60vh;
  display: flex;
  align-items: center;
  h2 {
    font-family: "Nunito";
    font-size: 3rem;
  }
  p {
    font-size: 1.5rem;
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    padding-top: 50px;
    text-align: center;
    .gatsby-image-wrapper {
      margin: 0 auto;
      width: 200px;
    }
    h2 {
      font-size: 2rem;
    }
  }
`
const HomePageSubCon = styled.div`
  overflow: hidden;
  text-align: center;
  padding: 50px 0;
  h3 {
    font-size: 1.5rem;
    text-align: center;
    font-family: "Nunito";
    opacity: 0.75;
  }
  p {
    font-size: 1.5rem;
    opacity: 0.7;
    max-width: 700px;
    margin: 0 auto;
  }
  img {
    width: 100%;
  }
  .bg {
    transform: translateY(100px);
  }
  @media (max-width: 768px) {
    p {
    font-size: 1.2rem;
  }
  }
`
const BigTitle = styled.h2`
  font-size: 4rem;
  text-align: left;
  opacity: 0.7;
  @media (max-width: 768px) {
    font-size: 2rem;
  text-align: center;
  }
`
export default () => {
  const { edges } = useSiteImages()

  const skillObj = edges.filter(
    ({ node: skillNode }) =>
      skillNode.childImageSharp.fluid.originalName === "teaHome.png"
  )
  const imgSrc = skillObj[0].node.childImageSharp.fluid
  return (
    <HomeCon>
      <FirstCon>
        <Container>
          <Grid columns={2} stackable>
            <Grid.Column>
              <VSensorjs>
                <h2>Want to Stay Healthy Drink Matcha</h2>
                <p>
                  Over 159 million Americans drink tea every day. Drinking tea
                  every day has more health benefits than you think.
                </p>
                <Link to="/shop/">
                  <Button color="green">Shop</Button>
                </Link>
              </VSensorjs>
            </Grid.Column>
            <Grid.Column>
              <Img fluid={imgSrc} alt="teaHomeIcon" />
            </Grid.Column>
          </Grid>
        </Container>
      </FirstCon>

      <HomePageSubCon className="HomePageSubCon">
        <Container>
          <Grid columns={2} stackable reversed="mobile">
            <Grid.Column computer={6}>
              <img className="bg" src={homepage_info_img_3} alt="" />
            </Grid.Column>
            <Grid.Column computer={10} verticalAlign='middle'>
              <VSensorjs>
                <BigTitle>Unlock the Benefits of Tea</BigTitle>
                <p>
                  Matcha is 100% green tea leaves, ground to a fine powder. Real
                  match comes from Japan. Ours is from the Nishio regio which is
                  where the finest matcha is produced. Like all tea, matcha
                  comes form the tea plant.
                </p>
              </VSensorjs>
            </Grid.Column>
          </Grid>
        </Container>
      </HomePageSubCon>

      <HomePageSubCon className="HomePageSubCon">
        <Container>
          <VSensorjs>
            <h3>A Healthier Tea Experience</h3>
            <p>
              We want to empower and nurture a better tomorrow, where everyone
              has an equal opportunity to succeed. We’re bringing back tea as a
              cultural catalyst. Because our diversity and boldness should not
              only be in our cup, but in our minds, our community, and our
              society.
            </p>
            <img src={productIcon} alt="" />
          </VSensorjs>
        </Container>
      </HomePageSubCon>

      <HomePageSubCon className="HomePageSubCon">
        <Container>
          <VSensorjs>
            <h3>Feature Product</h3>
            <Products max={3} />
            <Link to="/shop/">
              <Button className="btn" color="teal">
                View Inventory
              </Button>
            </Link>
          </VSensorjs>
        </Container>
      </HomePageSubCon>
    </HomeCon>
  )
}
