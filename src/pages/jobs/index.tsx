import React from "react";
import { HeadFC, Link, PageProps, graphql } from "gatsby";
import SEO from "../../components/seo.component";
import Layout from "../../components/layout/layout.component";

const JobsPage: React.FC<PageProps> = ({ data }) => {
  return (
    <Layout>
      <main>Jobs page</main>
      {data.allMdx.nodes.map((node) => (
        <React.Fragment key={node.frontmatter.slug}>
          <Link to={`/jobs/${node.frontmatter.slug}`}>
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
    allMdx(filter: { frontmatter: { type: { eq: "job-offer" } } }) {
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

export default JobsPage;

export const Head: HeadFC = () => (
  <SEO
    pageTitle="Modino.io - jobs opportunities"
    description="Check out our open job opportunities and help us shape the future of IoT security."
    link="https://modino.io/jobs"
  />
);
