import React from 'react';
import { Link } from "gatsby"
//lib
// import axios from "axios";
import { Container,  } from "semantic-ui-react"
import { Card, Icon, Image } from "semantic-ui-react"
//pages
import Layout from "../components/layout"
//CSS
import SEO from "../components/seo"
import styled from "styled-components"
import "semantic-ui-css/semantic.min.css"
const Header = styled.div`
    color:red;
  `
export default function shop() {
  
  return (
    <Layout>
    <SEO title="Shop" />
    <Container>
      <Card>
        <Image src="/images/avatar/large/matthew.png" wrapped ui={false} />
        <Card.Content>
          <Card.Header><Header>Matthew</Header></Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Icon name="user" />
            22 Friends
        </Card.Content>
      </Card>
    </Container>
    <Link to="/page-3/">Go back to the page 3</Link>
  </Layout>
   
  )
}
