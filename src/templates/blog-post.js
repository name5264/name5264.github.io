import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  CDate,
  Container,
  Content,
  Footer,
  Header,
  Line,
  PageMoveContainer,
  PageMoveTitle,
  PostTitle,
  TagsWapper,
  Title,
  Wrapper,
} from "../style/templates/blog-post"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import components from "../components/customPostStyle"
import Tag from "../components/tag"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { navigate } from "gatsby"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.mdx
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
            <TagsWapper>
              {post.frontmatter.tags.map(tagName => (
                <Tag tagName={tagName} key={`${tagName}-postTag`}></Tag>
              ))}
            </TagsWapper>
          </Header>
          <Line />
          <Content>
            <MDXProvider components={components}>
              <MDXRenderer>{post.body}</MDXRenderer>
            </MDXProvider>
          </Content>
          <Line />
          <Footer>
            <PageMoveContainer
              onClick={() =>
                previous
                  ? navigate(`/post/${previous.frontmatter.title}`)
                  : null
              }
            >
              <PageMoveTitle align="left">
                <FontAwesomeIcon icon={faAngleLeft} size="3x" />
                <PostTitle>
                  {previous ? previous.frontmatter.title : `이전글 없음`}
                </PostTitle>
              </PageMoveTitle>
            </PageMoveContainer>
            <PageMoveContainer
              onClick={() =>
                next ? navigate(`/post/${next.frontmatter.title}`) : null
              }
            >
              <PageMoveTitle align="right">
                <PostTitle>
                  {next ? next.frontmatter.title : `다음글 없음`}
                </PostTitle>
                <FontAwesomeIcon icon={faAngleRight} size="3x" />
              </PageMoveTitle>
            </PageMoveContainer>
          </Footer>
        </Container>
      </Wrapper>
    </Layout>
  )
}

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
        tags
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
      }
    }
  }
`
