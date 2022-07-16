import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, SubTitle, Title } from "../style/pages/404"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: not found" />

      <Container>
        <Title>404 NOT FOUND!</Title>
        <SubTitle>
          페이지를 찾지 못하였습니다.
          <br />
          Posts / Tags 를 눌러 메인페이지로 돌아가주세요.
        </SubTitle>
      </Container>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
