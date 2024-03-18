import * as React from "react";
import Layout from "../../components/layout/layout.component";
import { HeadFC, Link, graphql } from "gatsby";
import Seo from "../../components/seo.component";

import * as styles from "./article.module.scss";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPost = ({
  data,
  children,
}: React.PropsWithChildren<{ data: object }>) => {
  const image = getImage(data.mdx.frontmatter.thumbnail);
  return (
    <Layout>
      <main className="m-main">
        <section className={`m-section ${styles.mArticle}`}>
          <div className="m-section-content">
            <div className={styles.mArticleBreadcrumbs}>
              <Link to="/" className={styles.mArticleBreadcrumb}>
                Home
              </Link>{" "}
              |
              <Link to="../" className={styles.mArticleBreadcrumb}>
                Articles
              </Link>{" "}
              |
              <div className={styles.mArticleBreadcrumb}>
                {data.mdx.frontmatter.tile_title}
              </div>
            </div>
            <div className={`m-section__header ${styles.mArticleHeader}`}>
              <GatsbyImage
                className={styles.mArticleHeaderImage}
                image={image}
                alt=""
              />
              <h1 className={styles.mArticleHeaderText}>
                {data.mdx.frontmatter.tile_title}
              </h1>
              <div className={styles.mArticleChips}>
                <div
                  className={`${styles.mArticleChip} ${styles.mArticleChipRed}`}
                >
                  Press
                </div>
              </div>
              <i className={styles.mArticleHeaderDate}>
                {data.mdx.frontmatter.date}
              </i>
            </div>
            <div className={styles.mArticleContent}>
              {children}

              <Link to="../" className={styles.mArticleBackLink}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="m313-440 196 196q12 12 11.5 28T508-188q-12 11-28 11.5T452-188L188-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l264-264q11-11 27.5-11t28.5 11q12 12 12 28.5T508-715L313-520h447q17 0 28.5 11.5T800-480q0 17-11.5 28.5T760-440H313Z" />
                </svg>
                Go back to Articles
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
        tile_title
        meta_description
        date(formatString: "MMMM D, YYYY")
        slug
        thumbnail {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }
`;

export const Head: HeadFC = ({ data }) => (
  <Seo
    pageTitle={data.mdx.frontmatter.title}
    description={data.mdx.frontmatter.meta_description}
    link={`https://modino.io/articles/${data.mdx.frontmatter.slug}`}
  />
);

export default BlogPost;
