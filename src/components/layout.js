/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Global } from "@emotion/core"
import styled from "@emotion/styled"
import sanitize from "../styles/sanitize.js"
import globalStyles from "../styles/global-styles";
import Topbar from "./topbar"
import Footer from "./footer"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  flex-grow: 1;
`

const Layout = ({ children }) => (
  <Wrapper>
    <Global styles={sanitize} />
    <Global styles={globalStyles} />
    <Topbar />
    <Main>{children}</Main>
    <Footer />
  </Wrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
