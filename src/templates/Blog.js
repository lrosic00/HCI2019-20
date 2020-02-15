import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Container from "react-bootstrap/Container"
import style from "../styles/blogTemplateStyle.module.css"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        author
      }
      html
    }
  }
`

const Blog = props => {
  return (
    <Layout activePage="./Blog">
      <Container className={style.container}>
        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <div
          className={style.renderedHtml}
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        ></div>

        <p className={style.signature}>
          {props.data.markdownRemark.frontmatter.author} -{" "}
          {props.data.markdownRemark.frontmatter.date}
        </p>
      </Container>
    </Layout>
  )
}

export default Blog
