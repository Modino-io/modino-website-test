import React from "react";
import { HeadFC, PageProps, graphql } from "gatsby";
import Seo from "../../components/seo.component";
import Layout from "../../components/layout/layout.component";
import ArticleTileComponent from "../../components/article-tile/article-tile.component";

import * as styles from "./index.module.scss";

const ArticlesPage: React.FC<PageProps> = ({ data }) => {
  const getArticlesFromProps = (
    propsArticles: Array<{
      frontmatter: {
        date: string;
        tile_title: string;
        slug: string;
        summary: string;
        thumbnail: string;
        category: unknown;
      };
    }>
  ) => {
    return propsArticles.map((propArticle) => ({
      title: propArticle.frontmatter.tile_title,
      date: propArticle.frontmatter.date,
      slug: propArticle.frontmatter.slug,
      thumbnailPhotoUrl: propArticle.frontmatter.thumbnail,
      summary: propArticle.frontmatter.summary,
      categories: Array.isArray(propArticle.frontmatter.category)
        ? propArticle.frontmatter.category
        : [propArticle.frontmatter.category],
    }));
  };

  return (
    <Layout>
      <main className="m-main">
        <section className={`m-section ${styles.mArticles}`}>
          <h1 className="m-section__header">Articles</h1>
          <div className="m-section__content">
            <div className={styles.mArticlesList}>
              {getArticlesFromProps(data.allMdx.nodes).map((article, index) => (
                <ArticleTileComponent key={index} {...article} />
              ))}
            </div>
          </div>
        </section>
      </main>
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
          tile_title
          date(formatString: "MMMM D, YYYY")
          slug
          summary
          thumbnail {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
          category
        }
      }
    }
  }
`;

export default ArticlesPage;

export const Head: HeadFC = () => (
  <Seo
    pageTitle="Modino.io - news and articles about cybersecurity"
    description="Stay updated with the latest Modino.io news. Read articles and learn from case studies about cybersecurity."
    link="https://modino.io/articles"
  />
);
