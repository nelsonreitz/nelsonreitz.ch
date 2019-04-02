import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Jumbotron from "../components/jumbotron"
import Section from "../components/section"
import SkillList from "../components/skillList"
import ToolList from "../components/toolList"

const IndexPage = () => (
  <Layout>
    <SEO title="Front-end Design and Development" keywords={[`gatsby`, `application`, `react`]} />
    <Jumbotron />

    <Section title="My work">
      <SkillList />
    </Section>

    <Section title="The tools I use">
      <ToolList />
    </Section>
  </Layout>
)

export default IndexPage
