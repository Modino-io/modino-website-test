import React, { useEffect, useRef, useState } from "react";
import { HeadFC, Link, PageProps, graphql } from "gatsby";
import Seo from "../components/seo.component";
import Layout from "../components/layout/layout.component";
import CarouselComponent from "../components/carousel/carousel.component";
import { Button } from "@rmwc/button";

import * as styles from "./index.module.scss";
import { ImageDataLike, StaticImage } from "gatsby-plugin-image";

const IndexPage = ({ data }: PageProps) => {
  let mainCtaButton: HTMLButtonElement;

  const [isMainCtaButtonVisible, setIsMainCtaButtonVisible] = useState(true);

  const getArticlesFromProps = (
    propsArticles: Array<{
      frontmatter: {
        date: string;
        tile_title: string;
        slug: string;
        summary: string;
        thumbnail: ImageDataLike;
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

  const checkMenuCtaButton = () => {
    setIsMainCtaButtonVisible(
      mainCtaButton?.getBoundingClientRect().y > mainCtaButton?.clientHeight
    );
  };

  useEffect(() => {
    mainCtaButton = document.getElementById(
      "main-cta-button"
    ) as HTMLButtonElement;

    document.addEventListener("scroll", checkMenuCtaButton);
  }, []);

  return (
    <Layout isMenuButtonAMainCtaButton={!isMainCtaButtonVisible}>
      <main className="m-main">
        <section className={`m-section m-top-hero ${styles.mHomeHero}`}>
          <div className="m-section__content">
            <div className="m-top-hero__wrapper">
              <h1 className="m-header m-top-hero__title">
                Keep your
                <br />
                IoT devices
                <br />
                <span className="m-top-hero__title-highlight">
                  out of harm’s way
                </span>
              </h1>
              <p className="m-top-hero__description">
                Deliver new software and configuration settings securely,
                remotely, and risk-free
              </p>
              <Button
                id="main-cta-button"
                unelevated
                className="m-top-hero__action-button cta-accent-button"
                onClick={() => (window.location.href = "./get-in-touch")}
              >
                Get in touch
              </Button>
            </div>
          </div>
        </section>
        <section className={`m-section ${styles.mMission}`}>
          <h2 className="m-section__header">Our mission</h2>
          <div className="m-section__content">
            <div className={styles.mQuote}>
              <blockquote className={styles.mQuoteText}>
                <span className="highlight">
                  Modino.io
                  <div className={styles.mQuoteImage}>
                    <svg
                      width="12.7mm"
                      height="12.7mm"
                      viewBox="0 0 12.7 12.7"
                      version="1.1"
                      id="svg5480"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs id="defs5477" />
                      <g id="layer1" transform="translate(-262.61319,-107.698)">
                        <path
                          d="m 271.83393,116.95842 q -0.33073,0 -0.49609,-0.2712 -0.16537,-0.2712 -0.0199,-0.56224 l 0.635,-1.28323 h -1.66687 q -0.33073,0 -0.56224,-0.23151 -0.23151,-0.23151 -0.23151,-0.56224 v -2.11667 q 0,-0.33073 0.23151,-0.56224 0.23151,-0.23151 0.56224,-0.23151 h 2.11666 q 0.33073,0 0.56224,0.23151 0.23151,0.23151 0.23151,0.56224 v 2.83105 q 0,0.0926 -0.0198,0.1852 -0.0198,0.0926 -0.0595,0.17198 l -0.76729,1.52136 q -0.0661,0.14552 -0.20506,0.23151 -0.1389,0.086 -0.31088,0.086 z m -4.7625,0 q -0.33073,0 -0.49609,-0.2712 -0.16537,-0.2712 -0.0198,-0.56224 l 0.635,-1.28323 h -1.66687 q -0.33073,0 -0.56224,-0.23151 -0.23151,-0.23151 -0.23151,-0.56224 v -2.11667 q 0,-0.33073 0.23151,-0.56224 0.23151,-0.23151 0.56224,-0.23151 h 2.11666 q 0.33073,0 0.56224,0.23151 0.23151,0.23151 0.23151,0.56224 v 2.83105 q 0,0.0926 -0.0198,0.1852 -0.0198,0.0926 -0.0595,0.17198 l -0.76729,1.52136 q -0.0661,0.14552 -0.20506,0.23151 -0.1389,0.086 -0.31088,0.086 z"
                          id="path4683"
                          style={{ strokeWidth: 0.264583 }}
                        />
                      </g>
                    </svg>
                  </div>
                </span>{" "}
                is a platform for IoT vulnerability management and over-the-air
                update orchestration at scale. A platform that is both safe and
                secure.
                <br />
                <br />
                Our mission is to keep our clients' IoT devices secure and
                online by providing stressless over-the-air update experience.
                <cite className={styles.mQuoteAuthor}>
                  <StaticImage
                    className={styles.mQuoteAuthorImage}
                    src="./../images/people/Blazej.webp"
                    alt="Błażej Pawlak - Modino CEO profile image"
                  />{" "}
                  Błażej Pawlak, CEO & Co-Founder
                </cite>
              </blockquote>
            </div>
          </div>
        </section>
        <section className={`m-section ${styles.mExplanation}`}>
          <div className={`m-section__content ${styles.mExplanationContent}`}>
            <div className={styles.mExplanationImage}>
              <img src="img/modino-man.svg" alt="modino man" />
            </div>
            <div className={styles.mExplanationText}>
              <p className={styles.mExplanationTitle}>/moˈdiːno/</p>
              <p className={styles.mExplanationDescription}>
                “Modino” is an Italian word used for misbehaving children, which
                roughly translates to “behave yourself”.
                <br />
                <br />
                We imagine our system as a guardian for various small IoT
                devices that keeps them in check and makes sure that they all
                behave as they should.
              </p>
            </div>
          </div>
        </section>
        <section className="m-section">
          <h2 className="m-section__header">About Modino</h2>
          <div className="m-section__content">
            <div className={styles.mSolutionContainer}>
              <div className={styles.mSolutionText}>
                <p>
                  <span className={styles.highlight}>Modino.io</span> creates
                  holistic deployable packages with your software and provides
                  its safe and secure delivery to your IoT devices – in both
                  private cloud and On-premise models.
                </p>
                <p>
                  Stay in control by monitoring update deployment status and
                  automatic vulnerability detection.
                </p>
                <p>
                  Trust Modino.io to keep your devices up-to-date and protected.
                </p>
                <Link className={styles.mSolutionSolutionLink} to="/solution">
                  Check our solution
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path d="M646-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h446L532-634q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T589-691l183 183q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L589-269q-12 12-28.5 11.5T532-270q-11-12-11.5-28t11.5-28l114-114Z" />
                  </svg>
                </Link>
              </div>
              <div className={styles.mSolutionVideo}>
                <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                  <iframe
                    title="Modino.io demo video"
                    src="https://player.vimeo.com/video/510677701?h=f87b25b0fa"
                    allow="autoplay; fullscreen; picture-in-picture"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="m-section">
          <h2 className="m-section__header">Awards & Recognitions</h2>
          <div className={`m-section__content ${styles.mAwardsContent}`}>
            <div className={styles.mAwardsCybersecurityBanner}>
              <a
                href="https://ecs-org.eu/return-of-ecsos-polish-edition-of-cyber-investor-days-in-katowice/"
                target="_blank"
                rel="noopener"
              >
                <StaticImage
                  layout="fullWidth"
                  src="./../images/cybersecurity-award-banner.jpeg"
                  alt="European Cybersecurity STARTup Award for Modino.io"
                />
              </a>
            </div>
            <div className={styles.mAwardsCybersecurityMade}>
              <a
                href="https://www.cybersecurity-label.eu/labelled-companies/"
                target="_blank"
                rel="noopener"
              >
                <StaticImage
                  src="./../images/cybersecurity-made-in-europe.png"
                  alt="cybersecurity made in Europe badge"
                />
              </a>
            </div>
          </div>
        </section>
        <section className={`m-section ${styles.mArticlesTeaser}`}>
          <h2 className="m-section__header">Latest insights</h2>
          <div className="m-section__content">
            <Link to="/articles" className={styles.mArticlesTeaserSeeAll}>
              See all articles
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M646-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h446L532-634q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T589-691l183 183q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L589-269q-12 12-28.5 11.5T532-270q-11-12-11.5-28t11.5-28l114-114Z" />
              </svg>
            </Link>
            <CarouselComponent
              articles={getArticlesFromProps(data.allMdx.nodes)}
            />
          </div>
        </section>
        <section className={`m-section ${styles.mSummary}`}>
          <div className={`m-section__content ${styles.mSummaryContent}`}>
            <div className={styles.mWrapper}>
              <h2 className="m-section__header">
                Put your <br />
                IoT devices <br />
                <span className="highlight">in good hands</span>
              </h2>
              <Button
                unelevated
                className="cta-accent-button"
                onClick={() => (window.location.href = "./get-in-touch")}
                id="summary-cta-btn"
              >
                Get in touch
              </Button>
            </div>
            <img
              alt="Modino update guard illustration"
              src="./img/Illustration.svg"
              className={styles.mSecurityImg}
            />
          </div>
        </section>
      </main>
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
          tile_title
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

export default IndexPage;

export const Head: HeadFC = () => (
  <Seo
    pageTitle="Modino.io - Safe and secure updates for IoT devices"
    description="Modino.io will help you keep your IoT devices up and running with safe and secure over-the-air updates."
    link="https://modino.io/"
  />
);
