import * as React from "react"
import { Link, graphql } from "gatsby"

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

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Container>
        <CardContainer width={width}>
          {posts.map(post => {
            const title = post.frontmatter.title || ""

            return (
              <Card to={post.fields.slug} key={post.fields.slug}>
                타이틀: {title}
                <br />
                내용: {post.frontmatter.description || post.excerpt}
              </Card>
            )
          })}
        </CardContainer>
      </Container>
    </Layout>
  )
}

// const BlogIndex = ({ data, location }) => {
//   const siteTitle = data.site.siteMetadata?.title || `Title`
//   const posts = data.allMarkdownRemark.nodes

//   if (posts.length === 0) {
//     return (
//       <Layout location={location} title={siteTitle}>
//         <Seo title="All posts" />
//         <p>
//           No blog posts found. Add markdown posts to "content/blog" (or the
//           directory you specified for the "gatsby-source-filesystem" plugin in
//           gatsby-config.js).
//         </p>
//       </Layout>
//     )
//   }

//   return (
//     <Layout location={location} title={siteTitle}>
//       <Seo title="All posts" />
//       <ol style={{ listStyle: `none` }}>
//         {posts.map(post => {
//           const title = post.frontmatter.title || post.fields.slug

//           return (
//             <li key={post.fields.slug}>
//               <article
//                 className="post-list-item"
//                 itemScope
//                 itemType="http://schema.org/Article"
//               >
//                 <header>
//                   <h2>
//                     <Link to={post.fields.slug} itemProp="url">
//                       <span itemProp="headline">{title}</span>
//                     </Link>
//                   </h2>
//                   <small>{post.frontmatter.date}</small>
//                 </header>
//                 <section>
//                   <p
//                     dangerouslySetInnerHTML={{
//                       __html: post.frontmatter.description || post.excerpt,
//                     }}
//                     itemProp="description"
//                   />
//                 </section>
//               </article>
//             </li>
//           )
//         })}
//       </ol>
//     </Layout>
//   )
// }

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
