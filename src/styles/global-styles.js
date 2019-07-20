import { css } from "@emotion/core"
import { colors, mediaQueries } from "../tokens"

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700');

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    color: ${colors.text};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  p {
    margin-top: 0;
    margin-bottom: 1.5rem;
    font-size: 1.375rem;
    line-height: 1.75;
    hyphens: auto;
  }

  ${mediaQueries.sm} {
    p {
      margin-bottom: 2.5rem;
      hyphens: initial;
    }
  }

  p a {
    display: inline-block;
    position: relative;
    color: ${colors.text};
    text-decoration: none;
  }

  p a:after {
    content: "";
    display: block;
    width: 100%;
    height: 3px;
    margin-top: -5px;
    background-color: ${colors.mutedText};
    transition: background-color .05s ease-in-out;
  }

  p a:hover:after {
    background-color: ${colors.secondary};
  }
`

export default globalStyles
