import React from "react";
import { HeadFC, Link, PageProps, graphql } from "gatsby";
import Seo from "../../components/seo.component";
import Layout from "../../components/layout/layout.component";

import "./index.scss";

const JobsPage: React.FC<PageProps> = ({ data }) => {
  return (
    <Layout>
      <main className="m-main">
        <section className="m-section m-jobs">
          <div className="m-section__content">
            <div className="m-jobs__content">
              <h1 className="m-section__header m-jobs__header">
                Jobs at <span className="highlight">Modino.io</span>
              </h1>
              <div className="m-jobs__text">
                Current openings:
                <ul>
                  {data.allMdx.nodes.map((node) => (
                    <li key={node.frontmatter.slug}>
                      <Link to={`/jobs/${node.frontmatter.slug}`}>
                        {node.frontmatter.title}
                      </Link>
                      <br />
                    </li>
                  ))}
                </ul>
              </div>
              <img
                className="m-jobs__image"
                src="/img/jobs.svg"
                alt="jobs hero image"
              />
            </div>
          </div>
        </section>
      </main>
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
  <Seo
    pageTitle="Modino.io - jobs opportunities"
    description="Check out our open job opportunities and help us shape the future of IoT security."
    link="https://modino.io/jobs"
  />
);
