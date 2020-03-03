import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
// import Img from "gatsby-image"
import { Container, Grid, Button,} from "semantic-ui-react"
import { Link } from "gatsby"
import teaHome from "../images/teaHome.png"
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
  .imgCon {
    width: 100%;
    text-align: right;
    img {
      max-width: 400px;
    }
  }
`
const HomePageSubCon = styled.div`
  /* background-color: var(--baseWhite); */
  padding: 50px 0;
  h3 {
    font-size: 2rem;
    text-align: center;
    font-family: "Nunito";
    opacity: 0.75;
  }
  p {
    opacity: 0.7;
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
  }
`
const ComponentName = () => {
  // const data = useStaticQuery(graphql`
  //   {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  return (
    <HomeCon>
      <FirstCon>
        <Container>
          <Grid columns={2} stackable>
            <Grid.Column>
              <h2>Want to stay healthy drink matcha.</h2>
              <p>
                Over 159 million Americans drink tea every day. Drinking tea
                every day has more health benefits than you think.
              </p>
              <Link to="/shop/">
                <Button color="green">Shop</Button>
              </Link>
            </Grid.Column>
            <Grid.Column>
              <div className="imgCon">
                <img src={teaHome} alt="teaHomeIcon" />
              </div>
            </Grid.Column>
          </Grid>
        </Container>{" "}
      </FirstCon>
      <HomePageSubCon className="HomePageSubCon">
        <Container>
          {" "}
          <h3>Unlock the benefits of tea in its purest form.</h3>
          <p>
            Matcha is 100% green tea leaves, ground to a fine powder. Real match
            comes from Japan. Ours is from the Nishio regio which is where the
            finest matcha is produced. Like all tea, matcha comes form the tea
            plant.
          </p>
        </Container>
      </HomePageSubCon>
      <HomePageSubCon className="HomePageSubCon">
        <Container>
          <h3>A Healthier Tea Experience</h3>
        </Container>
      </HomePageSubCon>
      <HomePageSubCon className="HomePageSubCon">
        <Container>
          <h3>Feature Product</h3>
        </Container>
      </HomePageSubCon>
    
    </HomeCon>
  )
}

export default ComponentName
