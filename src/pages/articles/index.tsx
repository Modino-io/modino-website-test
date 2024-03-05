import React from "react";
import { HeadFC, Link, PageProps, graphql } from "gatsby";
import SEO from "../../components/seo.component";
import Layout from "../../components/layout/layout.component";

const ArticlesPage: React.FC<PageProps> = ({ data }) => {
  return (
    <Layout>
      <main>Articles page</main>
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

export default ArticlesPage;

export const Head: HeadFC = () => (
  <SEO
    pageTitle="Modino.io - news and articles about cybersecurity"
    description="Stay updated with the latest Modino.io news. Read articles and learn from case studies about cybersecurity."
    link="https://modino.io/articles"
  />
);
