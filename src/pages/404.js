import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Section title="Page not found">
     <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Section>
  </Layout>
)

export default NotFoundPage
