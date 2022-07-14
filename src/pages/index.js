import * as React from "react"
import { graphql } from "gatsby"
import kebabCase from "lodash.kebabcase"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { CardContainer, Container } from "../style/pages"
import Card from "../components/card"

const BlogIndex = ({ data, location }) => {
  const [width, setWidth] = React.useState(0)
  React.useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  console.log(data)
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMdx.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Container>
        {posts.length == 0 ? null : (
          <CardContainer width={width}>
            {posts.map(post => {
              const title = post.frontmatter.title || ""

              return (
                <Card
                  to={title}
                  key={title}
                  title={title}
                  description={post.frontmatter.description || post.excerpt}
                />
              )
            })}
          </CardContainer>
        )}
      </Container>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        frontmatter {
          title
          date
          description
          tags
        }
      }
    }
  }
`
