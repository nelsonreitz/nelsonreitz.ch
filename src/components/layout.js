/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import Topbar from "./topbar"
import Footer from "./footer"
import "../styles/sanitize.css"
import "../styles/global-styles.css"

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
    <Topbar />
    <Main>{children}</Main>
    <Footer />
  </Wrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
