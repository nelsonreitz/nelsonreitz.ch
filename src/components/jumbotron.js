import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { colors, mediaQueries } from "../tokens"
import Container from "./container"
import Button from "./button"

const styles = css`
  padding-top: 2rem;
  padding-bottom: 4rem;
  ${mediaQueries.sm} {
    padding-top: 10vh;
  }

  p {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    line-height: 1.5;
    hyphens: initial;
    ${mediaQueries.sm} {
      margin-bottom: 2rem;
      font-size: 2rem;
    }
  }
`

const Title = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 3rem;
  line-height: 1.125;
  ${mediaQueries.sm} {
    font-size: 4rem;
  }
`

const Accent = styled.p`
  margin-bottom: 1.5rem;

  em {
    font-style: initial;
    color: ${colors.red};
  }

  span {
    vertical-align: middle;
  }
`

const Jumbotron = () => (
  <div css={styles}>
    <Container>
      <Title>Hi! I am Nelson Reitz, a Swiss Front-end Developer</Title>
      <p>I build user interfaces for websites and apps. Currently based in Lausanne. Previously @ DevFactory.</p>
      <Accent>
        <em>Now available for hire</em> <span role="img" aria-label="Sparkles">✨</span>
      </Accent>
      <Button to="mailto:nelson.reitz@gmail.com">Get in touch</Button>
    </Container>
  </div>
)

export default Jumbotron
