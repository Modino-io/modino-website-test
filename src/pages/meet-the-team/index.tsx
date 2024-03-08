import React, { useState } from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import Layout from "../../components/layout/layout.component";

import "./index.scss";
import Seo from "../../components/seo.component";

const MeetTheTeam: React.FC<PageProps> = ({ data }) => {
  const tabLabels = [
    "Founders",
    "Management",
    "Design",
    "Back-end",
    "Front-end",
    "DevOps",
  ];
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <Layout>
      <main className="m-main">
        <section className="m-section m-team-header">
          <h2 className="m-section__header">Meet the team</h2>
          <div className="m-section__content">
            <img
              alt="Modino team photo"
              src="/img/people/team-photo.webp"
              className="m-team-photo"
            />
          </div>
        </section>
        <section className="m-section m-team">
          <div className="m-section__content">
            <menu className="m-team__menu">
              <ul className="m-team__list" role="tablist">
                {tabLabels.map((label, index) => (
                  <li
                    className={`m-team__list-item ${
                      currentTabIndex === index ? "active" : ""
                    }`}
                    key={index}
                  >
                    <button
                      className={`mdc-button mdc-button--outlined ${
                        currentTabIndex === index ? "mdc-button--raised" : ""
                      }`}
                      role="tab"
                      key={index}
                      onClick={() => setCurrentTabIndex(index)}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
              <hr />
            </menu>
            <div className="m-people-list" hidden={currentTabIndex !== 0}>
              <div className="m-person-card">
                <img
                  alt="Błażej Pawlak Modino - CEO profile image"
                  src="/img/people/Blazej.webp"
                  className="m-person-card__image"
                />
                <div className="m-person-card__info">
                  <p>
                    <strong>Błażej Pawlak</strong>
                  </p>
                  <p>CEO, Co-Founder</p>
                  <a
                    href="https://www.linkedin.com/in/bpawlak"
                    target="_blank"
                    rel="noopener"
                  >
                    <img alt="linkedIn icon" src="/img/linkedin.svg" />
                  </a>
                </div>
              </div>
              <div className="m-person-card">
                <img
                  src="/img/people/Kuba.webp"
                  alt="Jakub Jelonek Modino - CTO profile image"
                  className="m-person-card__image"
                />
                <div className="m-person-card__info">
                  <p>
                    <strong>Jakub Jelonek</strong>
                  </p>
                  <p>CTO, Co-Founder</p>
                  <a
                    href="https://www.linkedin.com/in/jjelonek"
                    target="_blank"
                    rel="noopener"
                  >
                    <img alt="linkedIn icon" src="/img/linkedin.svg" />
                  </a>
                </div>
              </div>
              <div className="m-person-card">
                <img
                  alt="Radek Ratajczak - Modino CDO profile image"
                  src="/img/people/Radek.webp"
                  className="m-person-card__image"
                />
                <div className="m-person-card__info">
                  <p>
                    <strong>Radek Ratajczak</strong>
                  </p>
                  <p>CDO, Co-Founder</p>
                  <a
                    href="https://www.linkedin.com/in/radek-ratajczak"
                    target="_blank"
                    rel="noopener"
                  >
                    <img alt="linkedIn icon" src="/img/linkedin.svg" />
                  </a>
                </div>
              </div>
            </div>
            <div className="m-people-list" hidden={currentTabIndex !== 1}>
              <div className="m-person-card">
                <img
                  alt="Michał Pawlak - Modino Scrum Master profile image"
                  src="/img/people/Michal.webp"
                  className="m-person-card__image"
                />
                <div className="m-person-card__info">
                  <p>
                    <strong>Michał Pawlak</strong>
                  </p>
                  <p>Scrum Master</p>
                  <a
                    href="https://www.linkedin.com/in/micha%C5%82-pawlak-17376689"
                    target="_blank"
                    rel="noopener"
                  >
                    <img alt="linkedIn icon" src="/img/linkedin.svg" />
                  </a>
                </div>
              </div>
              <div className="m-person-card">
                <img
                  alt="Paweł Żebrowski - Modino Business Development Manager profile image"
                  src="/img/people/Pawel-Z.webp"
                  className="m-person-card__image"
                />
                <div className="m-person-card__info">
                  <p>
                    <strong>Paweł Żebrowski</strong>
                  </p>
                  <p>Business Development Manager</p>
                  <a
                    href="https://www.linkedin.com/in/pzebrowski"
                    target="_blank"
                    rel="noopener"
                  >
                    <img alt="linkedIn icon" src="/img/linkedin.svg" />
                  </a>
                </div>
              </div>
            </div>
            <div className="m-people-list" hidden={currentTabIndex !== 2}>
              <div className="m-person-card">
                <img
                  alt="Radosław Ratajczak - Modino CDO profile image"
                  src="/img/people/Radek.webp"
                  className="m-person-card__image"
                />
                <div className="m-person-card__info">
                  <p>
                    <strong>Radosław Ratajczak</strong>
                  </p>
                  <p>CDO, Co-Founder</p>
                  <a
                    href="https://www.linkedin.com/in/radek-ratajczak"
                    target="_blank"
                    rel="noopener"
                  >
                    <img alt="linkedIn icon" src="/img/linkedin.svg" />
                  </a>
                </div>
              </div>
              <div className="m-person-card">
                <img
                  alt="Katarzyna Chmielewska - Modino Design Lead profile image"
                  src="/img/people/Kasia.webp"
                  className="m-person-card__image"
                />
                <div className="m-person-card__info">
                  <p>
                    <strong>Katarzyna Chmielewska</strong>
                  </p>
                  <p>Design Lead</p>
                  <a
                    href="https://www.linkedin.com/in/kasia-chmielewska"
                    target="_blank"
                    rel="noopener"
                  >
                    <img alt="linkedIn icon" src="/img/linkedin.svg" />
                  </a>
                </div>
              </div>
              <div className="m-person-card">
                <img
                  alt="Karolina Szpera - Modino UX/UI Designer profile image"
                  src="/img/people/Karolina.webp"
                  className="m-person-card__image"
                />
                <div className="m-person-card__info">
                  <p>
                    <strong>Karolina Szpera</strong>
                  </p>
                  <p>UX / UI Designer</p>
                  <a
                    href="https://www.linkedin.com/in/karolinaszpera"
                    target="_blank"
                    rel="noopener"
                  >
                    <img alt="linkedIn icon" src="/img/linkedin.svg" />
                  </a>
                </div>
              </div>
            </div>
            <div className="m-people-list" hidden={currentTabIndex !== 3}>
              <div className="m-person-card">
                <img
                  alt="Jakub Jelonek - Modino CTO profile image"
                  src="/img/people/Kuba.webp"
                  className="m-person-card__image"
                />
                <div className="m-person-card__info">
                  <p>
                    <strong>Jakub Jelonek</strong>
                  </p>
                  <p>CTO, Co-Founder, Principal Software Engineer</p>
                  <a
                    href="https://www.linkedin.com/in/jjelonek"
                    target="_blank"
                    rel="noopener"
                  >
                    <img alt="linkedIn icon" src="/img/linkedin.svg" />
                  </a>
                </div>
              </div>
              <div className="m-person-card">
                <img
                  alt="Artur Pałka profile image"
                  src="/img/people/Artur.webp"
                  className="m-person-card__image"
                />
                <div className="m-person-card__info">
                  <p>
                    <strong>Artur Pałka</strong>
                  </p>
                  <p>Software Engineer, Architect</p>
                  <a
                    href="https://www.linkedin.com/in/artur-pa%C5%82ka-665993121"
                    target="_blank"
                    rel="noopener"
                  >
                    <img alt="linkedIn icon" src="/img/linkedin.svg" />
                  </a>
                </div>
              </div>
              <div className="m-person-card">
                <img
                  alt="Wojtek Henszke - Modino Software Engineer profile image"
                  src="/img/people/Wojtek.webp"
                  className="m-person-card__image"
                />
                <div className="m-person-card__info">
                  <p>
                    <strong>Wojtek Henszke</strong>
                  </p>
                  <p>Software Engineer</p>
                  <a
                    href="https://www.linkedin.com/in/henszkew"
                    target="_blank"
                    rel="noopener"
                  >
                    <img alt="linkedIn icon" src="/img/linkedin.svg" />
                  </a>
                </div>
              </div>
              <div className="m-person-card">
                <img
                  alt="Krzysztof Klarkowski - Modino Software Engineer profile image"
                  src="/img/people/Krzysztof.webp"
                  className="m-person-card__image"
                />
                <div className="m-person-card__info">
                  <p>
                    <strong>Krzysztof Klarkowski</strong>
                  </p>
                  <p>Software Engineer</p>
                  <a
                    href="https://www.linkedin.com/in/krzysztof-klarkowski"
                    target="_blank"
                    rel="noopener"
                  >
                    <img alt="linkedIn icon" src="/img/linkedin.svg" />
                  </a>
                </div>
              </div>
              <div className="m-person-card">
                <img
                  alt="Filip Gorczyca - Modino Software Engineer profile image"
                  src="/img/people/Filip.webp"
                  className="m-person-card__image"
                />
                <div className="m-person-card__info">
                  <p>
                    <strong>Filip Gorczyca</strong>
                  </p>
                  <p>Software Engineer</p>
                  <a
                    href="https://www.linkedin.com/in/filip-gorczyca-a773901b4/"
                    target="_blank"
                    rel="noopener"
                  >
                    <img alt="linkedIn icon" src="/img/linkedin.svg" />
                  </a>
                </div>
              </div>
            </div>
            <div className="m-people-list" hidden={currentTabIndex !== 4}>
              <div className="m-person-card">
                <img
                  alt="Błażej Pawlak - Modino CEO profile image"
                  src="/img/people/Blazej.webp"
                  className="m-person-card__image"
                />
                <div className="m-person-card__info">
                  <p>
                    <strong>Błażej Pawlak</strong>
                  </p>
                  <p>CEO, Co-Founder, Principal Software Engineer</p>
                  <a
                    href="https://www.linkedin.com/in/bpawlak"
                    target="_blank"
                    rel="noopener"
                  >
                    <img alt="linkedIn icon" src="/img/linkedin.svg" />
                  </a>
                </div>
              </div>
              <div className="m-person-card">
                <img
                  alt="Paweł Sobkowski - Modino Software Engineer profile image"
                  src="/img/people/Pawel-S.webp"
                  className="m-person-card__image"
                />
                <div className="m-person-card__info">
                  <p>
                    <strong>Paweł Sobkowski</strong>
                  </p>
                  <p>Software Engineer</p>
                  <a
                    href="https://www.linkedin.com/in/pawe%C5%82-sobkowski"
                    target="_blank"
                    rel="noopener"
                  >
                    <img alt="linkedIn icon" src="/img/linkedin.svg" />
                  </a>
                </div>
              </div>
              <div className="m-person-card">
                <img
                  alt="Kacper Kaźmierkiewicz - Modino Software Engineer profile image"
                  src="/img/people/Kacper.webp"
                  className="m-person-card__image"
                />
                <div className="m-person-card__info">
                  <p>
                    <strong>Kacper Kaźmierkiewicz</strong>
                  </p>
                  <p>Software Engineer</p>
                  <a
                    href="https://www.linkedin.com/in/kacper-kaz"
                    target="_blank"
                    rel="noopener"
                  >
                    <img alt="linkedIn icon" src="/img/linkedin.svg" />
                  </a>
                </div>
              </div>
            </div>
            <div className="m-people-list" hidden={currentTabIndex !== 5}>
              <div className="m-person-card">
                <img
                  alt="Patryk Janas - Modino DevOps Engineer profile image"
                  src="/img/people/Patryk.webp"
                  className="m-person-card__image"
                />
                <div className="m-person-card__info">
                  <p>
                    <strong>Patryk Janas</strong>
                  </p>
                  <p>DevOps Engineer</p>
                  <a
                    href="https://www.linkedin.com/in/patryk-janas"
                    target="_blank"
                    rel="noopener"
                  >
                    <img alt="linkedIn icon" src="/img/linkedin.svg" />
                  </a>
                </div>
              </div>
              <div className="m-person-card">
                <img
                  alt="Jan Kwarciński - Modino DevOps Engineer profile image"
                  src="/img/people/Jan.webp"
                  className="m-person-card__image"
                />
                <div className="m-person-card__info">
                  <p>
                    <strong>Jan Kwarciński</strong>
                  </p>
                  <p>DevOps Engineer</p>
                  <a
                    href="https://www.linkedin.com/in/jan-kwarci%C5%84ski"
                    target="_blank"
                    rel="noopener"
                  >
                    <img alt="linkedIn icon" src="/img/linkedin.svg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="m-section m-values">
          <h2 className="m-section__header">Values we live by</h2>
          <div className="m-section__content">
            <div className="m-values__list">
              <div className="m-values__item">
                <img
                  src="/img/values-illustration-1.svg"
                  alt="Modino values illustration - there is always a way"
                  className="m-values__item-image"
                />
                <h3 className="m-values__item-title">There is always a way</h3>
                <p className="m-values__item-description">
                  For us, nothing is impossible - even if it seems that way. We
                  encourage our team to think outside the box and to find
                  creative solutions to challenges that arise.
                </p>
              </div>
              <div className="m-values__item">
                <img
                  src="/img/values-illustration-2.svg"
                  alt="Modino values illustration - dream big"
                  className="m-values__item-image"
                />
                <h3 className="m-values__item-title">Dream big</h3>
                <p className="m-values__item-description">
                  We believe that setting ambitious goals and pursuing them with
                  passion is the key to driving innovation.
                </p>
              </div>
              <div className="m-values__item">
                <img
                  src="/img/values-illustration-3.svg"
                  alt="Modino values illustration - less is more"
                  className="m-values__item-image"
                />
                <h3 className="m-values__item-title">Less is more</h3>
                <p className="m-values__item-description">
                  We believe that technology should be intuitive, easy to use,
                  and seamlessly integrated into our lives. This is why we’re
                  designing our platform with simplicity in mind.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="m-section m-ready-to-join">
          <h2 className="m-section__header">Ready to Join Our Team?</h2>
          <div className="m-section__content">
            <p className="m-ready-to-join__text">
              Explore our job opportunities and take the first step to join us
              on this exciting journey.
            </p>
            <Link to="/jobs" className="m-ready-to-join__link">
              View job openings
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
        </section>
      </main>
    </Layout>
  );
};

export default MeetTheTeam;

export const Head: HeadFC = () => (
  <Seo
    pageTitle="Modino.io - meet the team"
    description="Check out the values we live by and meet the people behind Modino.io."
    link="https://modino.io/meet-the-team"
  />
);
