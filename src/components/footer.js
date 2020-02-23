import React from "react"
import styled from "styled-components"
import { Container, Icon } from "semantic-ui-react"
const MadeWith = styled.div`
  color: red;
`
export default function footer() {
  return (
    <footer>
      <Container>
        © {new Date().getFullYear()},{` `}
        <span>Built with React JS Gatsby</span>
        <MadeWith>
          Made with <Icon name="heart" size="small" /> in Orlando, Florida
        </MadeWith>
      </Container>
    </footer>
  )
}
