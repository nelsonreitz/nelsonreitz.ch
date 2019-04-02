import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Jumbotron from "../components/jumbotron"
import Section from "../components/section"

const IndexPage = () => (
  <Layout>
    <SEO title="Front-end Design and Development" keywords={[`gatsby`, `application`, `react`]} />
    <Jumbotron />

    <Section title="My work">
      content
    </Section>

    <Section title="The tools I use">
      Tools content
    </Section>
  </Layout>
)

export default IndexPage
