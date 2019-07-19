import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { mediaQueries } from "../tokens"
import Container from "./container"

const styles = css`
  padding-top: 2rem;
  padding-bottom: 2rem;
  ${mediaQueries.sm} {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`

const Title = styled.h2`
  margin-bottom: 1.5rem;
  font-size: 2rem;
  line-height: 1.125;
  ${mediaQueries.sm} {
    font-size: 2.5rem;
  }
`

const Section = ({ title, children }) => (
  <section css={styles}>
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  </section>
)

export default Section
