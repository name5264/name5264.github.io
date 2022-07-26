import * as React from "react";

import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Title } from "../style/templates/tags";
import Tag from "../components/tag";
import Card from "../components/card";

import { CardContainer, Container } from "../style/pages";

const Tags = ({ pageContext, data, location }) => {
  const [width, setWidth] = React.useState(0);
  React.useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  const { tag } = pageContext;
  const { edges } = data.allMdx;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout>
      <Seo title={tag} />
      <Title>
        <Tag tagName={tag} />
      </Title>
      <Container>
        <CardContainer width={width}>
          {edges.map(({ node: { frontmatter } }) => {
            const title = frontmatter.title || "";

            return (
              <Card
                to={`/post/${title}/`}
                key={`title-${tag}`}
                title={title}
                description={frontmatter.description}
                tag={frontmatter.tags}
              />
            );
          })}
        </CardContainer>
      </Container>
    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query ($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            tags
            description
          }
        }
      }
    }
  }
`;
