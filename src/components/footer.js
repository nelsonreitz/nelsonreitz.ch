import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { colors, mediaQueries } from "../tokens"
import Container from "./container"
import Button from "./button"

const styles = css`
  padding-top: 4rem;
  padding-bottom: 6rem;
  color: ${colors.white};
  background-color: ${colors.dark};

  p a {
    font-weight: 600;
    color: ${colors.secondary};

    &:after {
      background-color: ${colors.mutedText};
    }

    &:hover:after {
      background-color: ${colors.secondary};
    }
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

const Footer = () => (
  <footer css={styles}>
    <Container>
      <Title>Contact</Title>
      <p>
        Feel free to contact me by email if you have questions or just want to
        discuss about front-end stuff. I am eager to share my passion for
        detailed, clean and user-centered products with you! You can also
        connect with me on{" "}
        <a
          href="//linkedin.com/in/nelsonreitz"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        and{" "}
        <a
          href="//twitter.com/nelsreitz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        .
      </p>
      <Button to="mailto:nelson.reitz@gmail.com">Get in touch</Button>
    </Container>
  </footer>
)

export default Footer
