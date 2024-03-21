import React from "react";
import { HeadFC, Link, PageProps, graphql } from "gatsby";
import Seo from "../../components/seo.component";
import Layout from "../../components/layout/layout.component";

import * as styles from "./index.module.scss";

const JobsPage: React.FC<PageProps> = ({ data }) => {
  return (
    <Layout>
      <main className="m-main">
        <section className={`m-section ${styles.mJobs}`}>
          <div className="m-section__content">
            <div className={styles.mJobsContent}>
              <h1 className={`m-section__header ${styles.mJobsHeader}`}>
                Jobs at <span className="highlight">Modino.io</span>
              </h1>
              <div className={styles.mJobsText}>
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
                className={styles.mJobsImage}
                src="/img/jobs.svg"
                alt="jobs hero"
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
