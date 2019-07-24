import React from "react"
import { css } from "@emotion/core"
import { colors } from "../tokens"

const styles = css`
  display: inline-block;
  padding: 1.5rem 3.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${colors.white};
  text-decoration: none;
  border-radius: 4px;
  background-color: ${colors.red};
  transition: background-color .1s ease-in-out;
  &:hover {
    background-color: ${colors.darkRed};
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
