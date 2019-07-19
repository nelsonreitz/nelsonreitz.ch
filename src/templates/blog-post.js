import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import { colors, mediaQueries } from "../tokens"
import Layout from "../components/layout"
import Container from "../components/container"
import SEO from "../components/seo"

const BlogPost = styled.div`
  padding-top: 10vh;
  padding-bottom: 2.5rem;
  ${mediaQueries.sm} {
    padding-bottom: 9.5rem;
  }

  h2 {
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
    font-size: 2rem;
    line-height: 1.125;
    ${mediaQueries.sm} {
      margin-top: 4rem;
      font-size: 2.5rem;
    }
  }
`

const Title = styled.h1`
  margin-bottom: 0;
  font-size: 3rem;
  ${mediaQueries.sm} {
    font-size: 4rem;
  }
`

const Date = styled.p`
  margin-bottom: 1.5rem;
  font-size: 2rem;
  color: ${colors.mutedText};
`

export default ({ data }) => {
  const post = data.markdownRemark
  const pageTitle = post.frontmatter.title + ` | Nelson Reitz`
  return (
    <Layout>
      <SEO title={pageTitle} />
      <Container>
        <BlogPost>
          <Title>{post.frontmatter.title}</Title>
          <Date>{post.frontmatter.date}</Date>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </BlogPost>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`
