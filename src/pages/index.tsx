import * as React from "react";
import { Link, HeadFC, PageProps, graphql } from "gatsby";
import SEO from "../components/seo.component";
import Layout from "../components/layout/layout.component";
import CarouselComponent from "../components/carousel/carousel.component";

const IndexPage: React.FC<PageProps> = ({ data }) => {
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
        <section className="m-section m-top-hero m-home-hero">
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
              <button
                id="main-cta-button"
                className="m-top-hero__action-button mdc-button mdc-button--unelevated cta-accent-button"
                onClick={() => (window.location.href = "./get-in-touch")}
              >
                <span className="mdc-button__ripple"></span>
                <span className="mdc-button__focus-ring"></span>
                <span className="mdc-button__label">Get in touch</span>
              </button>
            </div>
          </div>
        </section>
        <section className="m-section m-mission">
          <h2 className="m-section__header">Our mission</h2>
          <div className="m-section__content">
            <div className="m-quote">
              <blockquote className="m-quote__text">
                <span className="highlight">
                  Modino-io
                  <div className="m-quote__image">
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
                </span>
                is a platform for IoT vulnerability management and over-the-air
                update orchestration at scale. A platform that is both safe and
                secure.
                <br />
                <br />
                Our mission is to keep our clients' IoT devices secure and
                online by providing stressless over-the-air update experience.
                <cite className="m-quote__author">
                  <img
                    className="m-quote__author-image"
                    src="img/people/Blazej.webp"
                    alt="Błażej Pawlak - Modino CEO profile image"
                  />
                  Błażej Pawlak, CEO & Co-Founder
                </cite>
              </blockquote>
            </div>
          </div>
        </section>
        <section className="m-section m-explanation">
          <div className="m-section__content m-explanation__content">
            <div className="m-explanation__image">
              <img src="./img/modino-man.svg" alt="modino man" />
            </div>
            <div className="m-explanation__text">
              <p className="m-explanation__title">/moˈdiːno/</p>
              <p className="m-explanation__description">
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
        <section className="m-section m-solution">
          <h2 className="m-section__header">About Modino</h2>
          <div className="m-section__content">
            <div className="m-solution__container">
              <div className="m-solution__text">
                <p>
                  <span className="highlight">Modino.io</span> creates holistic
                  deployable packages with your software and provides its safe
                  and secure delivery to your IoT devices – in both private
                  cloud and On-premise models.
                </p>
                <p>
                  Stay in control by monitoring update deployment status and
                  automatic vulnerability detection.
                </p>
                <p>
                  Trust Modino.io to keep your devices up-to-date and protected.
                </p>
                <a className="m-solution__solution-link" href="./solution">
                  Check our solution
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path d="M646-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h446L532-634q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T589-691l183 183q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L589-269q-12 12-28.5 11.5T532-270q-11-12-11.5-28t11.5-28l114-114Z" />
                  </svg>
                </a>
              </div>
              <div className="m-solution__video">
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
        <section className="m-section m-awards">
          <h2 className="m-section__header">Awards & Recognitions</h2>
          <div className="m-section__content m-awards__content">
            <div className="m-awards__cybersecurity-banner">
              <a
                href="https://ecs-org.eu/return-of-ecsos-polish-edition-of-cyber-investor-days-in-katowice/"
                target="_blank"
                rel="noopener"
              >
                <img
                  src="img/cybersecurity-award-banner.jpeg"
                  alt="European Cybersecurity STARTup Award for Modino.io"
                />
              </a>
            </div>
            <div className="m-awards__cybersecurity-made">
              <a
                href="https://www.cybersecurity-label.eu/labelled-companies/"
                target="_blank"
                rel="noopener"
              >
                <img
                  src="img/cybersecurity-made-in-europe.png"
                  alt="cybersecurity made in Europe badge"
                />
              </a>
            </div>
          </div>
        </section>
        <section className="m-section m-articles-teaser">
          <h2 className="m-section__header">Latest insights</h2>
          <CarouselComponent
            articles={getArticlesFromProps(data.allMdx.nodes)}
          />
        </section>
        <section className="m-section m-summary">
          <div className="m-section__content m-summary__content">
            <div className="m-wrapper">
              <h2 className="m-section__header">
                Put your <br />
                IoT devices <br />
                <span className="highlight">in good hands</span>
              </h2>
              <button
                className="mdc-button mdc-button--unelevated cta-accent-button"
                onClick={() => (window.location.href = "./get-in-touch")}
                id="summary-cta-btn"
              >
                <span className="mdc-button__ripple"></span>
                <span className="mdc-button__label">Get in touch</span>
              </button>
            </div>
            <img
              alt="Modino update guard illustration"
              src="./img/Illustration.svg"
              className="m-security-img"
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
          thumbnail
          category
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
