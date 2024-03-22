import React, { useState } from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import Layout from "../../components/layout/layout.component";

import * as styles from "./index.module.scss";
import Seo from "../../components/seo.component";
import { Button } from "@rmwc/button";
import { StaticImage } from "gatsby-plugin-image";

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
        <section className={`m-section ${styles.mTeamHeader}`}>
          <h2 className="m-section__header">Meet the team</h2>
          <div className="m-section__content">
            <StaticImage
              alt="Modino team photo"
              src="./../../images/people/team-photo.webp"
              className={styles.mTeamPhoto}
            />
          </div>
        </section>
        <section className={`m-section ${styles.mTeam}`}>
          <nav className={`m-section__content ${styles.mTeamMenu}`}>
            <ul className={styles.mTeamList}>
              {tabLabels.map((label, index) => (
                <li
                  className={`${styles.mTeamListItem} ${
                    currentTabIndex === index ? styles.mTeamListItemActive : ""
                  }`}
                  key={`${label}${index}`}
                >
                  <Button
                    raised={currentTabIndex === index}
                    outlined={currentTabIndex !== index}
                    onClick={() => setCurrentTabIndex(index)}
                    className={styles.mTeamListItemButton}
                  >
                    {label}
                  </Button>
                </li>
              ))}
            </ul>
            <hr />
          </nav>
          <div className="m-section__content">
            <div className={styles.mPeopleList} hidden={currentTabIndex !== 0}>
              <div className={styles.mPersonCard}>
                <StaticImage
                  alt="Błażej Pawlak Modino - CEO profile image"
                  src="./../../images/people/Blazej.webp"
                  className={styles.mPersonCardImage}
                />
                <div className={styles.mPersonCardInfo}>
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
              <div className={styles.mPersonCard}>
                <StaticImage
                  src="./../../images/people/Kuba.webp"
                  alt="Jakub Jelonek Modino - CTO profile image"
                  className={styles.mPersonCardImage}
                />
                <div className={styles.mPersonCardInfo}>
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
              <div className={styles.mPersonCard}>
                <StaticImage
                  alt="Radek Ratajczak - Modino CDO profile image"
                  src="./../../images/people/Radek.webp"
                  className={styles.mPersonCardImage}
                />
                <div className={styles.mPersonCardInfo}>
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
            <div className={styles.mPeopleList} hidden={currentTabIndex !== 1}>
              <div className={styles.mPersonCard}>
                <StaticImage
                  alt="Michał Pawlak - Modino Scrum Master profile image"
                  src="./../../images/people/Michal.webp"
                  className={styles.mPersonCardImage}
                />
                <div className={styles.mPersonCardInfo}>
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
              <div className={styles.mPersonCard}>
                <StaticImage
                  alt="Paweł Żebrowski - Modino Business Development Manager profile image"
                  src="./../../images/people/Pawel-Z.webp"
                  className={styles.mPersonCardImage}
                />
                <div className={styles.mPersonCardInfo}>
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
            <div className={styles.mPeopleList} hidden={currentTabIndex !== 2}>
              <div className={styles.mPersonCard}>
                <StaticImage
                  alt="Radosław Ratajczak - Modino CDO profile image"
                  src="./../../images/people/Radek.webp"
                  className={styles.mPersonCardImage}
                />
                <div className={styles.mPersonCardInfo}>
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
              <div className={styles.mPersonCard}>
                <StaticImage
                  alt="Katarzyna Chmielewska - Modino Design Lead profile image"
                  src="./../../images/people/Kasia.webp"
                  className={styles.mPersonCardImage}
                />
                <div className={styles.mPersonCardInfo}>
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
              <div className={styles.mPersonCard}>
                <StaticImage
                  alt="Karolina Szpera - Modino UX/UI Designer profile image"
                  src="./../../images/people/Karolina.webp"
                  className={styles.mPersonCardImage}
                />
                <div className={styles.mPersonCardInfo}>
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
            <div className={styles.mPeopleList} hidden={currentTabIndex !== 3}>
              <div className={styles.mPersonCard}>
                <StaticImage
                  src="./../../images/people/Kuba.webp"
                  alt="Jakub Jelonek Modino - CTO profile image"
                  className={styles.mPersonCardImage}
                />
                <div className={styles.mPersonCardInfo}>
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
              <div className={styles.mPersonCard}>
                <StaticImage
                  alt="Artur Pałka profile image"
                  src="./../../images/people/Artur.webp"
                  className={styles.mPersonCardImage}
                />
                <div className={styles.mPersonCardInfo}>
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
              <div className={styles.mPersonCard}>
                <StaticImage
                  alt="Wojtek Henszke - Modino Software Engineer profile image"
                  src="./../../images/people/Wojtek.webp"
                  className={styles.mPersonCardImage}
                />
                <div className={styles.mPersonCardInfo}>
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
              <div className={styles.mPersonCard}>
                <StaticImage
                  alt="Krzysztof Klarkowski - Modino Software Engineer profile image"
                  src="./../../images/people/Krzysztof.webp"
                  className={styles.mPersonCardImage}
                />
                <div className={styles.mPersonCardInfo}>
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
              <div className={styles.mPersonCard}>
                <StaticImage
                  alt="Filip Gorczyca - Modino Software Engineer profile image"
                  src="./../../images/people/Filip.webp"
                  className={styles.mPersonCardImage}
                />
                <div className={styles.mPersonCardInfo}>
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
            <div className={styles.mPeopleList} hidden={currentTabIndex !== 4}>
              <div className={styles.mPersonCard}>
                <StaticImage
                  alt="Błażej Pawlak - Modino CEO profile image"
                  src="./../../images/people/Blazej.webp"
                  className={styles.mPersonCardImage}
                />
                <div className={styles.mPersonCardInfo}>
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
              <div className={styles.mPersonCard}>
                <StaticImage
                  alt="Paweł Sobkowski - Modino Software Engineer profile image"
                  src="./../../images/people/Pawel-S.webp"
                  className={styles.mPersonCardImage}
                />
                <div className={styles.mPersonCardInfo}>
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
              <div className={styles.mPersonCard}>
                <StaticImage
                  alt="Kacper Kaźmierkiewicz - Modino Software Engineer profile image"
                  src="./../../images/people/Kacper.webp"
                  className={styles.mPersonCardImage}
                />
                <div className={styles.mPersonCardInfo}>
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
            <div className={styles.mPeopleList} hidden={currentTabIndex !== 5}>
              <div className={styles.mPersonCard}>
                <StaticImage
                  alt="Patryk Janas - Modino DevOps Engineer profile image"
                  src="./../../images/people/Patryk.webp"
                  className={styles.mPersonCardImage}
                />
                <div className={styles.mPersonCardInfo}>
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
              <div className={styles.mPersonCard}>
                <StaticImage
                  alt="Jan Kwarciński - Modino DevOps Engineer profile image"
                  src="./../../images/people/Jan.webp"
                  className={styles.mPersonCardImage}
                />
                <div className={styles.mPersonCardInfo}>
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
        <section className={`m-section`}>
          <h2 className="m-section__header">Values we live by</h2>
          <div className="m-section__content">
            <div className={styles.mValuesList}>
              <div className={styles.mValuesItem}>
                <img
                  src="/img/values-illustration-1.svg"
                  alt="Modino values illustration - there is always a way"
                  className={styles.mValuesItemImage}
                />
                <h3 className={styles.mValuesItemTitle}>
                  There is always a way
                </h3>
                <p className={styles.mValuesItemDescription}>
                  For us, nothing is impossible - even if it seems that way. We
                  encourage our team to think outside the box and to find
                  creative solutions to challenges that arise.
                </p>
              </div>
              <div className={styles.mValuesItem}>
                <img
                  src="/img/values-illustration-2.svg"
                  alt="Modino values illustration - dream big"
                  className={styles.mValuesItemImage}
                />
                <h3 className={styles.mValuesItemTitle}>Dream big</h3>
                <p className={styles.mValuesItemDescription}>
                  We believe that setting ambitious goals and pursuing them with
                  passion is the key to driving innovation.
                </p>
              </div>
              <div className={styles.mValuesItem}>
                <img
                  src="/img/values-illustration-3.svg"
                  alt="Modino values illustration - less is more"
                  className={styles.mValuesItemImage}
                />
                <h3 className={styles.mValuesItemTitle}>Less is more</h3>
                <p className={styles.mValuesItemDescription}>
                  We believe that technology should be intuitive, easy to use,
                  and seamlessly integrated into our lives. This is why we’re
                  designing our platform with simplicity in mind.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={`m-section ${styles.mReadyToJoin}`}>
          <h2 className="m-section__header">Ready to Join Our Team?</h2>
          <div className="m-section__content">
            <p className={styles.mReadyToJoinText}>
              Explore our job opportunities and take the first step to join us
              on this exciting journey.
            </p>
            <Link to="/jobs" className={styles.mReadyToJoinLink}>
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
