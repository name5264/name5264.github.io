import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { CardContainer, Container } from "../style/pages";
import Card from "../components/card";

const BlogIndex = ({ data }) => {
  const [width, setWidth] = React.useState(0);
  const [posts] = React.useState(data.allMdx.nodes);
  React.useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Layout>
      <Seo title="All posts" />
      <Container>
        {posts.length === 0 ? null : (
          <CardContainer width={width}>
            {posts.map((post) => {
              const title = post.frontmatter.title || "";

              return (
                <Card
                  to={`/post/${title}/`}
                  key={`${title}-card`}
                  title={title}
                  description={post.frontmatter.description || post.excerpt}
                  tag={post.frontmatter.tags}
                />
              );
            })}
          </CardContainer>
        )}
      </Container>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
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
`;
