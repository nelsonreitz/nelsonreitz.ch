import React from "react"
import { css } from "@emotion/core"

const styles = css`
  max-width: 50rem;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
`

const Container = ({ children }) => (
  <div css={styles}>
    {children}
  </div>
)

export default Container