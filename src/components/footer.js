import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Container, Icon, Grid, Divider } from "semantic-ui-react"
import teaIcon from "../images/teaIcon.png"
const Footer = styled.div`
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
    color: var(--baseBlack);
    font-size: 12px;
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
  i {
    color: var(--baseRed);
    margin: 0;
    font-size: 12px;
  }
`
const ReservedSpan = styled.div`
  font-size: 14px;
  padding-top: 10px;
  opacity: 0.2;
`
export default function footer() {
  return (
    <Footer>
      <Container>
        <Divider />
        {/* <div class="ui mobile reversed stackable equal width grid"> */}
        <Grid columns={2} stackable reversed="mobile">
          <Grid.Column>
            <FooterLeft>
              <SiteInfo>
                <Link to="/">
                  <img src={teaIcon} alt="mainIcon" />
                  <span>Great Earth Tea</span>
                </Link>
              </SiteInfo>
              <MadeWith>
                Made with <Icon name="heart" /> in Orlando, Florida
              </MadeWith>
              <ReservedSpan>
                © {new Date().getFullYear()}, Built with Gatsby JS All rights
                reserved.
              </ReservedSpan>
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
          </Grid.Column>
          {/* </div> */}
        </Grid>
      </Container>
    </Footer>
  )
}
