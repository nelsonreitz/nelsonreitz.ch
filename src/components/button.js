import React from "react"
import { css } from "@emotion/core"

const styles = css`
  display: inline-block;
  padding: 1.5rem 3.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  background-color: #ec4a61;
  transition: background-color .1s ease-in-out;
  &:hover {
    background-color: #c92a3f;
  }
`

const Button = ({ to, children }) => (
  <a
    css={styles}
    href={to}
  >
    {children}
  </a>
)

export default Button
