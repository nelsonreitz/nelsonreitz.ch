import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Jumbotron from "../components/jumbotron"
import Section from "../components/section"
import SkillList from "../components/skillList"
import ToolList from "../components/toolList"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Nelson Reitz | Swiss Front-end Developer" keywords={[`Front-end Developer`, `Lausanne`, `UX Designer`, `JAMstack`]} />
    <Jumbotron />

    <Section title="Blog">
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>{node.frontmatter.title}</h3>
            <p>{node.frontmatter.date}</p>
          </Link>
        </div>
      ))}
    </Section>

    <Section title="My work">
      <p>My goal is to build clean, responsive user interfaces with a focus on usability. Embracing the duality between my design background and my passion for software development and user experience, I feel comfortable working on the whole spectrum of UI development.</p>
      <SkillList />
    </Section>

    <Section title="The tools I use">
      <p>I like learning about new technologies and try to keep up with the always-evolving JavaScript development world. Currently diving in the React ecosystem with Gatsby!</p>
      <ToolList />
    </Section>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
