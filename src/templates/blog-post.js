import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "../styles/blogPost.module.css"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="container">
        <div className={styles.blogPost}>
          <h1 className={styles.title}>{post.frontmatter.title}</h1>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.html }}
          >
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
