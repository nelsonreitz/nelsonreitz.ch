/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Topbar from "./topbar"
import Footer from "./footer"
import "../styles/sanitize.css"
import "../styles/global-styles.css"
import "../styles/layout.css"

const Layout = ({ children }) => (
  <>
    <Topbar />
    <main>{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
