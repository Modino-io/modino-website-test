import * as React from "react";
import { Link, HeadFC, PageProps, graphql } from "gatsby";
import SEO from "../components/seo.component";
import Layout from "../components/layout/layout.component";

const IndexPage: React.FC<PageProps> = ({ data }) => {
  return (
    <Layout>
      Index page
      <br />
      <Link to="/articles">Go to Articles</Link>
      <Link to="/jobs">Go to Jobs</Link>
      <p>Latest 3 articles</p>
      {data.allMdx.nodes.map((node) => (
        <React.Fragment key={node.frontmatter.slug}>
          <Link to={`/articles/${node.frontmatter.slug}`}>
            {node.frontmatter.title}
          </Link>
          <br />
        </React.Fragment>
      ))}
    </Layout>
  );
};
export const query = graphql`
  query {
    allMdx(
      limit: 3
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { type: { eq: "article" } } }
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
      }
    }
  }
`;

export default IndexPage;

export const Head: HeadFC = () => (
  <SEO
    pageTitle="Modino.io - Safe and secure updates for IoT devices"
    description="Modino.io will help you keep your IoT devices up and running with safe and secure over-the-air updates."
    link="https://modino.io/"
  />
);
