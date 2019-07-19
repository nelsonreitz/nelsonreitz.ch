import React from "react"
import { css } from "@emotion/core"
import { colors, mediaQueries } from "../tokens"

const styles = css`
  svg {
    color: #9faebd;
    vertical-align: top;
    width: 1rem;
    height: 1rem;
    margin-right: .5rem;
  }

  span {
    display: none;
    ${mediaQueries.sm} {
      display: inline;
    }
  }

  &:hover {
    svg {
      color: ${colors.text};
    }

    span {
      text-decoration: underline;
    }
  }
`

const SocialLink = ({ socialNetwork, href, children }) => (
  <a
    href={href}
    css={styles}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={socialNetwork}
  >
    {children}
    <span>{socialNetwork}</span>
  </a>
)

export default SocialLink
