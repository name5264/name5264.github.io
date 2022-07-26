import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { Container } from "../style/pages";
import Tag from "../components/tag";

const NotFoundPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="tags" />
      <Container>
        {data.allMdx.group.map((value) => (
          <Tag tagName={value.fieldValue} key={value.fieldValue}>
            {value.totalCount}
          </Tag>
        ))}
      </Container>
    </Layout>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
