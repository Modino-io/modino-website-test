import * as React from "react";
import Layout from "../../components/layout/layout.component";
import { HeadFC, Link, graphql } from "gatsby";
import Seo from "../../components/seo.component";

import * as styles from "./job.module.scss";

const BlogPost = ({
  data,
  children,
}: React.PropsWithChildren<{ data: object }>) => {
  return (
    <Layout>
      <main className="m-main">
        <section className={`m-section ${styles.mJob}`}>
          <div className="m-section__content">
            <div className={styles.mJobBreadcrumbs}>
              <Link to="/" className={styles.mJobBreadcrumb}>
                Home
              </Link>{" "}
              |
              <Link to="../" className={styles.mJobBreadcrumb}>
                Jobs
              </Link>{" "}
              |
              <div className={styles.mJobBreadcrumb}>
                {data.mdx.frontmatter.title}
              </div>
            </div>
            <h1 className={`m-section__header ${styles.mJobHeader}`}>
              {data.mdx.frontmatter.title}
            </h1>
            <div className={styles.mJobContent}>
              <p>
                <b>Location:</b> Bydgoszcz, Poland / Warsaw, Poland or remote –
                Full time
              </p>

              {children}
              <Link to="../" className={styles.mJobBackLink}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="m313-440 196 196q12 12 11.5 28T508-188q-12 11-28 11.5T452-188L188-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l264-264q11-11 27.5-11t28.5 11q12 12 12 28.5T508-715L313-520h447q17 0 28.5 11.5T800-480q0 17-11.5 28.5T760-440H313Z" />
                </svg>
                Go back to Jobs
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        meta_description
        slug
        type
      }
    }
  }
`;

export const Head: HeadFC = ({ data }) => (
  <Seo
    pageTitle={`Modino.io - ${data.mdx.frontmatter.title}`}
    description={data.mdx.frontmatter.meta_description}
    link={`https://modino.io/jobs/${data.mdx.frontmatter.slug}`}
  />
);

export default BlogPost;
