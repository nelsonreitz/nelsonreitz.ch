/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
import "./reset.css"
import "./global-styles.css"
import "./layout.css"

const Layout = ({ children }) => (
  <>
    <Header siteTitle="Nelson Reitz" />
    <div className="container">
      <main>{children}</main>
      <Footer />
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
