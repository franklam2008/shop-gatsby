import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Container, Icon, Grid } from "semantic-ui-react"
import teaIcon from "../../images/logo2.png"
import Newsletter from "./newsletter"

const Footer = styled.div`
  background-color: var(--darkSaved);
  color: var(--baseWhite);
  padding-top: 20px;
  .FooterNavCon {
    display: flex;
    padding: 20px 0;
    max-width: 500px;
  }

  padding-bottom: 20px;
  @media (max-width: 768px) {
    padding-bottom: 70px;
    .FooterNavCon {
      flex-direction: column;
    }
  }
`
const FooterLeft = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  img {
    width: 130px;
  }
  @media (max-width: 768px) {
    align-items: center;
  }
`
const SiteInfo = styled.div`
  a {
    display: flex;
    padding-bottom: 10px;
    align-items: center;
    span {
      margin-left: 5px;
      font-size: 1.5rem;
      color: var(--baseWhite);
    }
  }
`
const FooterNav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  a {
    color: var(--baseWhite);
    font-size: 12px;
    margin-bottom: 10px;
    &:hover {
      color: var(--baseGreen);
      text-decoration: underline;
    }
  }
  @media (max-width: 768px) {
    flex-direction: initial;
    margin: 5px;
    align-items: center;
    h6 {
      margin: 0;
      width: 100px;
    }
    a {
      margin: 0;
      padding-right: 15px;
    }
  }
`
const MadeWith = styled.div`
  font-size: 12px;
  text-align: right;
  i {
    color: var(--baseRed);
    margin: 0;
    font-size: 12px;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`
const ReservedSpan = styled.div`
  text-align: right;
  font-size: 14px;
  padding-top: 10px;
  opacity: 0.2;
  @media (max-width: 768px) {
    text-align: center;
  }
`
export default function footer() {
  return (
    <React.Fragment>
      
      <Newsletter />
      <Footer>
        <Container>
          <Grid columns={2} stackable reversed="mobile">
            <Grid.Column width={5}>
              <FooterLeft>
                <SiteInfo>
                  <Link to="/">
                    <img src={teaIcon} alt="mainIcon" />
                  </Link>
                </SiteInfo>
              </FooterLeft>
            </Grid.Column>
            <Grid.Column width={11}>
              {" "}
              <Grid.Column floated="right" className="FooterNavCon">
                <FooterNav>
                  <h6>PRODUCT</h6>
                  <Link to="/shop/">Shop</Link>
                </FooterNav>
                <FooterNav>
                  <h6>COMPANY</h6>
                  <Link to="/about/">About Us</Link>
                </FooterNav>{" "}
                <FooterNav>
                  <h6>RESOURCES</h6>
                  <Link to="/returns/">Shipping</Link>
                  <Link to="/returns/">Returns</Link>
                  <Link to="/returns/">Privacy</Link>
                  <Link to="/faq/">FAQ</Link>
                </FooterNav>
              </Grid.Column>
              <MadeWith>
                Made with <Icon name="heart" /> in Orlando, Florida
              </MadeWith>
              <ReservedSpan>
                © {new Date().getFullYear()}, Built with Gatsby JS All rights
                reserved.
              </ReservedSpan>
            </Grid.Column>
          </Grid>
        </Container>
      </Footer>
    </React.Fragment>
  )
}
