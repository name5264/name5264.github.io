import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { CardContainer, Container } from "../style/pages"
import Card from "../components/card"

const BlogIndex = ({ data, location }) => {
  const [width, setWidth] = React.useState(0)
  React.useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

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
                  to={post.fields.slug}
                  key={post.fields.slug}
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
