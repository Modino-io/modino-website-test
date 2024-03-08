import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import Seo from "../../components/seo.component";
import Layout from "../../components/layout/layout.component";

import "./index.scss";

const PartnerProgram: React.FC<PageProps> = ({ data }) => {
  return (
    <Layout>
      <main className="m-main">
        <section className="m-section m-shape-future">
          <div className="m-section__content">
            <div className="m-shape-future__content">
              <div>
                <h1 className="m-section__header">
                  Shape the future together&nbsp;-
                  <br />
                  <span className="highlight">Become Our Partner</span>
                </h1>
                <p>
                  If you want to make a meaningful impact, become a Modino
                  Partner. You'll have the opportunity to share your expertise,
                  collaborate with our team, and contribute to innovative
                  solutions.
                </p>
                <p>
                  Join us on this exciting journey as we work together to make a
                  difference.
                </p>
              </div>
              <img src="/img/shape-the-future-hero.svg" alt="" />
            </div>
          </div>
        </section>
        <section className="m-section m-partner-program">
          <h2 className="m-section__header">What is Modino Partner Program?</h2>
          <div className="m-section__content">
            <div className="m-partner-program__content">
              <div className="m-program-tile">
                <div className="m-program-tile__title">
                  <img src="/img/program-illustration-1.svg" alt="" />
                </div>
                <div className="m-program-tile__text">
                  With your feedback we can grow faster and in a more tailored
                  way. Creating intuitive solutions that can be easily
                  integrated into your environment.
                </div>
              </div>
              <div className="m-program-tile">
                <div className="m-program-tile__title">
                  <img src="/img/program-illustration-2.svg" alt="" />
                </div>
                <div className="m-program-tile__text">
                  A place where you can have a direct impact on how our
                  innovation will be shaped. We’re looking forward for your
                  experiences and domain expertise to pursue the innovation
                  together, to create a product tailored to users needs. Your
                  needs.
                </div>
              </div>
              <div className="m-program-tile">
                <div className="m-program-tile__title">
                  <img src="/img/program-illustration-3.svg" alt="" />
                </div>
                <div className="m-program-tile__text">
                  Let us know about your needs and pain points, so we can find a
                  solution for those. Nothing is impossible – even if it seems
                  that way.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="m-section m-benefits">
          <div className="m-section__content">
            <div className="m-benefits__content">
              <h2 className="m-section__header">
                Benefits of joining the Program
              </h2>
              <img
                src="/img/checklist.svg"
                alt=""
                className="m-benefits__image"
              />
              <div className="m-benefits__text">
                <ul>
                  <li>
                    <img
                      className="m-benefits__list-item-counter"
                      src="/img/checklist-item.svg"
                      alt="list item icon"
                    />
                    <p>
                      You will help shape the future of Modino.io in a way, that
                      you can benefit most from.
                    </p>
                  </li>
                  <li>
                    <img
                      className="m-benefits__list-item-counter"
                      src="/img/checklist-item.svg"
                      alt="list item icon"
                    />
                    <p>
                      You will get a sneak peek into new features. To make sure
                      they are matching your needs and addressing the pain
                      points.
                    </p>
                  </li>
                  <li>
                    <img
                      className="m-benefits__list-item-counter"
                      src="/img/checklist-item.svg"
                      alt="list item icon"
                    />
                    <p>
                      Your voice will be heard and may affect our roadmap.
                      Nothing makes us happier than satisfied clients.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="m-section m-how-works">
          <h2 className="m-section__header">How it works?</h2>
          <div className="m-section__content">
            <div className="m-how-works__content">
              <p className="m-how-works__text">
                Engage in 1-2 hours of activities every month:
              </p>
              <div className="m-how-works__steps">
                <div className="m-how-works__step">
                  <img src="/img/icons/fact_check.svg" alt="" />
                  <p>Usability tests</p>
                </div>
                <div className="m-how-works__step">
                  <img src="/img/icons/forum.svg" alt="" />
                  <p>Initial design consultations</p>
                </div>
                <div className="m-how-works__step">
                  <img src="/img/icons/handshake.svg" alt="" />
                  <p>In-depth interviews</p>
                </div>
                <div className="m-how-works__step">
                  <img src="/img/icons/diversity_3.svg" alt="" />
                  <p>Participation in workshops</p>
                </div>
                <div className="m-how-works__step">
                  <img src="/img/icons/contract_edit.svg" alt="" />
                  <p>Surveys</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="m-section m-join-grow">
          <h2 className="m-section__header">Join, Engage, Grow</h2>
          <div className="m-section__content">
            <div className="m-join-grow__description">
              Ready to empower your influence? Join our partner program and be
              part of a network that fosters growth and innovation.
            </div>

            <div className="m-join-grow__content">
              <div className="m-join-grow__text">
                <ol>
                  <li>
                    Apply and and get verified
                    <p className="m-join-grow__point-text">
                      After applying to the Partner Program we will verify you
                      and get to know you more.
                    </p>
                  </li>
                  <li>
                    Sign the agreement
                    <p className="m-join-grow__point-text">
                      We need to prepare the legal, it might take a while.
                    </p>
                  </li>
                  <li>
                    Wait for an invite
                    <p className="m-join-grow__point-text">
                      Get ready for a message from us, providing you access to
                      special benefits.
                    </p>
                  </li>
                  <li>
                    Your time, your terms
                    <p className="m-join-grow__point-text">
                      Participation is free of charge and it is up to you how
                      much time you would like to invest.
                    </p>
                  </li>
                  <li>
                    No strings attached
                    <p className="m-join-grow__point-text">
                      You can resign at any time, whenever you choose.
                    </p>
                  </li>
                </ol>
              </div>
              <div className="m-join-grow__join-form">
                <img
                  src="/img/meeting_join.svg"
                  alt=""
                  className="m-join-grow__image"
                />
                <p>
                  Enter your email below to receive an exclusive invitation to
                  our partner program.
                </p>
                <form id="partner-program-form">
                  <div className="m-join-grow__join-form-field-wrapper">
                    <div
                      className="mdc-text-field mdc-text-field--outlined"
                      id="email-input-text-field"
                    >
                      <input
                        className="mdc-text-field__input"
                        id="email-input"
                        type="email"
                        required
                        name="email"
                        aria-controls="email-input-helper-text"
                        aria-describedby="email-input-helper-text"
                        autoComplete="off"
                      />
                      <div className="mdc-notched-outline">
                        <div className="mdc-notched-outline__leading"></div>
                        <div className="mdc-notched-outline__notch">
                          <label
                            htmlFor="email-input"
                            className="mdc-floating-label"
                          >
                            E-mail
                          </label>
                        </div>
                        <div className="mdc-notched-outline__trailing"></div>
                      </div>
                    </div>
                    <div className="mdc-text-field-helper-line">
                      <div
                        id="email-input-helper-text"
                        className="mdc-text-field-helper-text mdc-text-field-helper-text--validation-msg"
                      >
                        Field can't be empty
                      </div>
                    </div>
                  </div>
                  <div className="m-join-grow__join-form-field-wrapper">
                    <div className="mdc-form-field m-join-grow__join-form-checkbox">
                      <div className="mdc-checkbox">
                        <input
                          id="legal-checkbox"
                          type="checkbox"
                          className="mdc-checkbox__native-control"
                          name="legal"
                          value="false"
                          required
                        />
                        <div className="mdc-checkbox__background">
                          <svg
                            className="mdc-checkbox__checkmark"
                            viewBox="0 0 24 24"
                          >
                            <path
                              className="mdc-checkbox__checkmark-path"
                              fill="none"
                              d="M1.73,12.91 8.1,19.28 22.79,4.59"
                            />
                          </svg>
                          <div className="mdc-checkbox__mixedmark"></div>
                        </div>
                        <div className="mdc-checkbox__ripple"></div>
                      </div>
                      <label htmlFor="checkbox-2">
                        I have read and agree to the{" "}
                        <Link className="m-link" to="/privacy-policy">
                          Privacy Policy
                        </Link>{" "}
                        and{" "}
                        <Link className="m-link" to="/terms-of-service">
                          Terms of Service
                        </Link>
                      </label>
                    </div>
                  </div>

                  <button className="mdc-button mdc-button--unelevated m-join-grow__join-form-confirm-button">
                    <div className="mdc-button__ripple"></div>
                    <div className="mdc-button__label">Apply</div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="m-section m-program-presentation">
          <div className="m-section__content">
            <div className="m-program-presentation__text">
              Get a closer look to our Partner Program and download our
              presentation to explore all the program details, benefits, and
              opportunities.
            </div>
            <a
              className="m-program-presentation__link"
              href="/files/Modino Partner Program.pdf"
              target="_blank"
              rel="noopener"
            >
              <img src="/img/icons/pdf.svg" alt="pdf icon" />
              Modino Partner Program.pdf
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default PartnerProgram;

export const Head: HeadFC = () => (
  <Seo
    pageTitle="Modino.io - shaping cybersecurity with a partner program"
    description="Become part of the Modino Partner Program. Learn more about how we can collaborate and shape the future of cybersecurity."
    link="https://modino.io/partner-program"
  />
);
