import React, { useEffect, useRef, useState } from "react";
import { HeadFC } from "gatsby";
import Seo from "../../components/seo.component";
import Layout from "../../components/layout/layout.component";
import { Button } from "@rmwc/button";

import * as styles from "./index.module.scss";

const Solution = () => {
  let mainCtaButton: HTMLButtonElement;
  const [isMainCtaButtonVisible, setIsMainCtaButtonVisible] = useState(true);

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
        <section className={`m-section m-top-hero ${styles.mSolutionHero}`}>
          <div className="m-section__content">
            <div className="m-top-hero__wrapper">
              <h1 className="m-header m-top-hero__title">
                Discover Safe and Secure
                <br />
                Updates with
                <span className="m-top-hero__title-highlight"> Modino.io </span>
              </h1>
              <p className="m-top-hero__description">
                Modino is on-prem & private cloud solution which main goal is to
                provide software updates for IoT devices in a safe and secure
                way.
              </p>
              <Button
                unelevated
                id="main-cta-button"
                className="m-top-hero__action-button cta-accent-button"
                onClick={() => (window.location.href = "/get-in-touch")}
              >
                Get in touch
              </Button>
            </div>
          </div>
        </section>
        <section className={`m-section ${styles.mSolutionVideo}`}>
          <div className="m-section__content">
            <div className={styles.mSolutionVideoVideoContainer}>
              <iframe
                src="https://drive.google.com/file/d/1LX6aUjYMPFSh70V5xUAew0XW9NPJE03Z/preview"
                allow="autoplay"
                title="pitch-video"
              ></iframe>
            </div>
          </div>
        </section>
        <section className={`m-section ${styles.mKeyAspects}`}>
          <h2 className="m-section__header">Key aspects</h2>
          <div className="m-section__content">
            <div className={styles.mKeyAspectsList}>
              <div className={styles.mKeyAspectsItem}>
                <img
                  src="/img/key-aspect-illustration-1.svg"
                  alt="Modino values illustration - universal solution"
                  className={styles.mKeyAspectsItemImage}
                />
                <h3 className={styles.mKeyAspectsItemTitle}>
                  Universal solution
                </h3>
                <p className={styles.mKeyAspectsItemDescription}>
                  Whether you want to update software on machines, sensors,
                  robots, smart grid or information systems, measuring stations,
                  IP cameras, medical devices, servers, edge cloud
                  infrastructure, or even toys, Modino.io is able to handle it
                  all.
                </p>
              </div>
              <div className={styles.mKeyAspectsItem}>
                <img
                  src="/img/key-aspect-illustration-2.svg"
                  alt="Modino values illustration - not hardware bound"
                  className={styles.mKeyAspectsItemImage}
                />
                <h3 className={styles.mKeyAspectsItemTitle}>
                  Not hardware bound
                </h3>
                <p className={styles.mKeyAspectsItemDescription}>
                  Software delivery is hardware-independent. Modino.io
                  containers adapt to the target hardware on IoT devices,
                  enabling updates regardless of the specific hardware
                  architecture and configuration. As long as it runs on a Linux
                  operating system, Modino.io can update it.
                </p>
              </div>
              <div className={styles.mKeyAspectsItem}>
                <img
                  src="/img/key-aspect-illustration-3.svg"
                  alt="Modino values illustration - safe software delivery"
                  className={styles.mKeyAspectsItemImage}
                />
                <h3 className={styles.mKeyAspectsItemTitle}>
                  Safe software delivery
                </h3>
                <p className={styles.mKeyAspectsItemDescription}>
                  Atomic updates even in low network throughput environments.
                  Whether you need to update a remote EV charging station or an
                  ATM located in the countryside, Modino.io is able to deliver
                  reliable updates even with limited network throughput.
                </p>
              </div>
              <div className={styles.mKeyAspectsItem}>
                <img
                  src="/img/key-aspect-illustration-4.svg"
                  alt="Modino values illustration - ensured software application"
                  className={styles.mKeyAspectsItemImage}
                />
                <h3 className={styles.mKeyAspectsItemTitle}>
                  Ensured software application
                </h3>
                <p className={styles.mKeyAspectsItemDescription}>
                  With our automatic rollback procedure, your devices will never
                  go offline, even if something goes wrong during the update
                  process.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={`m-section ${styles.mManifesto}`}>
          <h2 className="m-section__header">Security and quality manifesto</h2>
          <div className="m-section__content">
            <p className={styles.mManifestoSectionSubtitle}>
              Modino.io means safe
            </p>
            <div className={styles.tilesContainer}>
              <div className={styles.mTile}>
                <div className={styles.mTileIcon}>
                  <img src="/img/icons/atom-icon.svg" />
                </div>
                <p className={styles.mTileContent}>
                  Modino.io platform ensures safe software delivery – data to be
                  delivered are created as atomic updates which makes them
                  possible to be send and receive even with low network
                  throughput
                </p>
              </div>
              <div className={styles.mTile}>
                <div className={styles.mTileIcon}>
                  <img src="/img/icons/cloud_sync-icon.svg" />
                </div>
                <p className={styles.mTileContent}>
                  Never be offline again - if the update fails, an automatic
                  rollback procedure starts. The device restores to the
                  previous, stable software version, and is still operational.
                </p>
              </div>
              <div className={styles.mTile}>
                <div className={styles.mTileIcon}>
                  <img src="/img/icons/update-icon.svg" />
                </div>
                <p className={styles.mTileContent}>
                  With a purchased annual license, each client gets regular
                  updates including security, performance patches, and new
                  releases of the Modino.io system.
                </p>
              </div>
            </div>
            <img
              src="/img/demo-screenshot.png"
              className={styles.mDemoScreenshot}
            />
            <hr className={styles.mManifestoDivider} />

            <div className={styles.mSecurityWrapper}>
              <p
                className={`${styles.mManifestoSectionContent} ${styles.mSecurityTitle}`}
              >
                Security is our second name.
                <br />
                Or, actually, the first
              </p>
              <div
                className={`${styles.tilesContainer} ${styles.mSecurityText}`}
              >
                <div className={styles.mTile}>
                  <div className={styles.mTileIcon}>
                    <img src="/img/icons/lan.svg" />
                  </div>
                  <p className={styles.mTileContent}>
                    Modino.io is delivered as a set of interconnected OCI
                    containers running in non-privileged mode or when needed
                    with a specifically created security profile. Internally all
                    communication is done via TLS v1.3.
                  </p>
                </div>
                <div className={styles.mTile}>
                  <div className={styles.mTileIcon}>
                    <img src="/img/icons/encrypted.svg" />
                  </div>
                  <p className={styles.mTileContent}>
                    Users are authenticated and authorized like any other system
                    actor with a "zero-trust" policy in mind. User accounts are
                    manageable with a deployed instance of an OpenID Connect
                    service that can be connected with the organization’s user
                    database (e.g. LDAP).
                  </p>
                </div>
                <div className={styles.mTile}>
                  <div className={styles.mTileIcon}>
                    <img src="/img/icons/support_agent.svg" />
                  </div>
                  <p className={styles.mTileContent}>
                    Modino.io Agent installed on endpoint devices does not
                    require administrator privileges to run, and leverages TLS
                    mutual authentication to communicate with Modino.io
                    services.
                  </p>
                </div>
                <div className={styles.mTile}>
                  <div className={styles.mTileIcon}>
                    <img src="/img/icons/key.svg" />
                  </div>
                  <p className={styles.mTileContent}>
                    Container images with software updates are encrypted and
                    signed with user keys that Modino.io does not have access
                    to. No personally identifiable information (PII) is stored.
                  </p>
                </div>
              </div>
              <img
                src="/img/Graph.svg"
                className={styles.mSecurityGraph}
                alt="modino graph"
              />
            </div>
          </div>
        </section>
        <section className="m-section">
          <h2 className="m-section__header">Awards & Recognitions</h2>
          <div className={styles.mAwardsContent}>
            <div className={styles.mAwardsCybersecurityBanner}>
              <a
                href="https://ecs-org.eu/return-of-ecsos-polish-edition-of-cyber-investor-days-in-katowice/"
                target="_blank"
                rel="noopener"
              >
                <img
                  src="/img/cybersecurity-award-banner.jpeg"
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
                <img
                  src="/img/cybersecurity-made-in-europe.png"
                  alt="cybersecurity made in Europe badge"
                />
              </a>
            </div>
          </div>
        </section>
        <section className={`m-section ${styles.mAdvantages}`}>
          <h2 className="m-section__header">Advantages</h2>
          <div className="m-section__content">
            <div className={styles.cardsContainer}>
              <div className={styles.mCard}>
                <div className={styles.mCardIcon}>
                  <img src="/img/icons/work.svg" alt="" />
                </div>
                <p className={styles.mCardTitle}>Experience</p>
                <p className={styles.mCardContent}>
                  Our team has more than 15+ years of practical experience in
                  cryptography, encryption and software delivery.
                </p>
              </div>
              <div className={styles.mCard}>
                <div className={styles.mCardIcon}>
                  <img src="/img/icons/alt_route.svg" alt="" />
                </div>
                <p className={styles.mCardTitle}>Flexibility</p>
                <p className={styles.mCardContent}>
                  Even if your IoT devices are not natively designed to be
                  updated, Modino.io can do it to keep your business safe.
                </p>
              </div>
              <div className={styles.mCard}>
                <div className={styles.mCardIcon}>
                  <img src="/img/icons/visibility.svg" alt="" />
                </div>
                <p className={styles.mCardTitle}>Monitoring and detection</p>
                <p className={styles.mCardContent}>
                  Modino.io monitors malicious behaviour and provides an active
                  mitigation.
                </p>
              </div>
              <div className={styles.mCard}>
                <div className={styles.mCardIcon}>
                  <img src="/img/icons/volunteer.svg" alt="" />
                </div>
                <p className={styles.mCardTitle}>Trust</p>
                <p className={styles.mCardContent}>
                  Your data is yours, Modino.io can't access it since data is
                  encrypted by your keys.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export const Head: HeadFC = () => (
  <Seo
    pageTitle="Modino.io - Learn about our solution for your IoT devices"
    description="Discover how Modino.io solution works. Learn about our security and quality manifesto."
    link="https://modino.io/solution"
  />
);

export default Solution;
