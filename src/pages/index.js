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
      <p>My goal is to build clean, responsive user interfaces with a focus on usability. Embracing the duality between my design background and my passion for web development, I feel comfortable working on the whole spectrum of UI development.</p>
      <SkillList />
    </Section>

    <Section title="The tools I use">
      <p>I like learning about new technologies and try to keep up with the always-evolving JavaScript development world. Currently diving in the React ecosystem with Gatsby!</p>
      <ToolList />
    </Section>
  </Layout>
)

export default IndexPage
