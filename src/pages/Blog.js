import React, { useState } from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import Container from "react-bootstrap/Container"
import style from "../styles/blogStyle.module.css"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
              author
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  let initialItems = [
    ...new Set(data.allMarkdownRemark.edges.map(edge => edge.node)),
  ]
  const [state, setState] = useState({
    items: initialItems,
  })

  let filterList = e => {
    if (!e.target.value.includes("\\")) {
      let updateList = initialItems
      updateList = updateList.filter(item => {
        return (
          item.frontmatter.title
            .toLowerCase()
            .search(e.target.value.toLowerCase()) !== -1
        )
      })
      setState({
        items: updateList,
      })
    }
  }

  return (
    <Layout activePage="./Blog">
      <Container className={style.container}>
        <h1>BLOG</h1>
        {/* <form>
          <input
            type="text"
            placeholder="Search by title"
            onChange={filterList}
          />
        </form> */}

        <div class={style.containerSearch}>
          <input type="text" placeholder="Search..." onChange={filterList} />
          <div className={style.search}></div>
        </div>

        <ul>
          {state.items.map(item => {
            return (
              <li className={style.posts}>
                <Link to={`/Blog/${item.fields.slug}`}>
                  <h2>{item.frontmatter.title}</h2>
                  <p>
                    {item.frontmatter.author} - {item.frontmatter.date}
                  </p>
                </Link>
              </li>
            )
          })}
        </ul>
      </Container>
    </Layout>
  )
}
export default BlogPage
