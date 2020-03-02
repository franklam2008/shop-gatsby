import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Container, Icon, Grid, Divider } from "semantic-ui-react"
import teaIcon from "../images/teaIcon.png"
const Footer = styled.div`
  background-color: var(--baseGray);
  padding-top:20px;
  .container {
    .column {
      margin: 0 !important;
    }
  }
  padding-bottom: 20px;
  @media (max-width: 768px) {
    padding-bottom: 70px;
  }
`
const FooterLeft = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  img {
    width: 30px;
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
      color: var(--baseBlack);
    }
  }
`
const FooterNav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  a {
    color: var(--subTextSaved);
    font-size: 12px;
    margin-bottom: 10px;
    &:hover {
      color: var(--baseGreen);
      text-decoration: underline;
    }
  }
  @media (max-width: 768px) {
    flex-direction: initial;
    justify-content: center;
    a {
      padding-right: 15px;
    }
  }
`
const MadeWith = styled.div`
  font-size: 12px;
  text-align:right;
  i {
    color: var(--baseRed);
    margin: 0;
    font-size: 12px;
  }
  @media (max-width: 768px) {
    text-align:center;

  }
`
const ReservedSpan = styled.div`
  text-align:right;
  font-size: 14px;
  padding-top: 10px;
  opacity: 0.2;
  @media (max-width: 768px) {
    text-align:center;

  }
`
export default function footer() {
  return (
    <Footer>
      <Container>
        <Grid columns={2} stackable reversed="mobile">
          <Grid.Column>
            <FooterLeft>
              <SiteInfo>
                <Link to="/">
                  <img src={teaIcon} alt="mainIcon" />
                  <span>Great Earth Tea</span>
                </Link>
              </SiteInfo>
             
              
            </FooterLeft>
          </Grid.Column>
          <Grid.Column>
            {" "}
            <FooterNav>
              <Link to="/about/">About Us</Link>
              <Link to="/about/">Shipping</Link>
              <Link to="/about/">Returns</Link>
              <Link to="/about/">Privacy</Link>
              <Link to="/about/">FAQ</Link>
             
            </FooterNav>
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
  )
}
