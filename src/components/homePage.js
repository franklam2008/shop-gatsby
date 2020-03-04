import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { Container, Grid, Button } from "semantic-ui-react"
import { Link } from "gatsby"
import VSensorjs from "../components/VisibilitySensor"
import Products from "../components/Products/Products"
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
  min-height: 60vh;
  display: flex;
  align-items: center;
  h2 {
    font-family: "Nunito";
    font-size: 3rem;
  }
  p {
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    padding-top: 50px;
    text-align: center;
    .gatsby-image-wrapper {
      margin:0 auto;
      width:300px;
    }
  }
`
const HomePageSubCon = styled.div`
  text-align: center;
  padding: 50px 0;
  h3 {
    font-size: 2rem;
    text-align: center;
    font-family: "Nunito";
    opacity: 0.75;
  }
  p {
    opacity: 0.7;
    max-width: 700px;
    margin: 0 auto;
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
                <h2>Want to stay healthy drink matcha.</h2>
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
          <VSensorjs>
            <h3>Unlock the benefits of tea in its purest form.</h3>
            <p>
              Matcha is 100% green tea leaves, ground to a fine powder. Real
              match comes from Japan. Ours is from the Nishio regio which is
              where the finest matcha is produced. Like all tea, matcha comes
              form the tea plant.
            </p>
          </VSensorjs>
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
            <Grid columns={3} stackable>
              <Grid.Column>
                <h2>1</h2>
              </Grid.Column>
              <Grid.Column>
                <h2>2</h2>
              </Grid.Column>
              <Grid.Column>
                <h2>3</h2>
              </Grid.Column>
            </Grid>
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
