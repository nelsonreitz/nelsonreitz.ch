import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Section title="My work">
      content
    </Section>

    <Section title="The tools I use">
      Tools content
    </Section>
  </Layout>
)

export default IndexPage
