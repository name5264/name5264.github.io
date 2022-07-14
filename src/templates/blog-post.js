import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  CDate,
  Container,
  Content,
  Header,
  Title,
  Wrapper,
} from "../style/templates/blog-post"

const BlogPostTemplate = ({ data, location }) => {
  console.log(data)
  const post = data.Mdx
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  const date = new Date(post.frontmatter.date)

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Wrapper>
        <Container>
          <Header>
            <Title>{post.frontmatter.title}</Title>
            <CDate>
              {String(date.getFullYear()).padEnd(4, "0")}년{" "}
              {String(date.getMonth() + 1).padStart(2, "0")}월{" "}
              {String(date.getDate()).padStart(2, "0")}일
            </CDate>
          </Header>
          <Content
            dangerouslySetInnerHTML={{ __html: post.body }}
            itemProp="articleBody"
          />
          <nav className="blog-post-nav">
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </Container>
      </Wrapper>
    </Layout>
  )
}

// const BlogPostTemplate = ({ data, location }) => {
//   const post = data.markdownRemark
//   const siteTitle = data.site.siteMetadata?.title || `Title`
//   const { previous, next } = data

//   return (
//     <Layout location={location} title={siteTitle}>
//       <Seo
//         title={post.frontmatter.title}
//         description={post.frontmatter.description || post.excerpt}
//       />
//       <article
//         className="blog-post"
//         itemScope
//         itemType="http://schema.org/Article"
//       >
//         <header>
//           <h1 itemProp="headline">{post.frontmatter.title}</h1>
//           <p>{post.frontmatter.date}</p>
//         </header>
//         <section
//           dangerouslySetInnerHTML={{ __html: post.html }}
//           itemProp="articleBody"
//         />
//         <hr />
//         <footer></footer>
//       </article>
//       <nav className="blog-post-nav">
//         <ul
//           style={{
//             display: `flex`,
//             flexWrap: `wrap`,
//             justifyContent: `space-between`,
//             listStyle: `none`,
//             padding: 0,
//           }}
//         >
//           <li>
//             {previous && (
//               <Link to={previous.fields.slug} rel="prev">
//                 ← {previous.frontmatter.title}
//               </Link>
//             )}
//           </li>
//           <li>
//             {next && (
//               <Link to={next.fields.slug} rel="next">
//                 {next.frontmatter.title} →
//               </Link>
//             )}
//           </li>
//         </ul>
//       </nav>
//     </Layout>
//   )
// }

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
