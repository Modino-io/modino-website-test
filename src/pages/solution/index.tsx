import React, { useEffect, useRef, useState } from "react";
import { HeadFC, PageProps } from "gatsby";
import Seo from "../../components/seo.component";
import Layout from "../../components/layout/layout.component";
import { Button } from "@rmwc/button";

import "./index.scss";

const Solution = ({ data }: PageProps) => {
  const mainCtaButton = useRef(null);
  const [isMainCtaButtonVisible, setIsMainCtaButtonVisible] = useState(true);

  const checkMenuCtaButton = () => {
    setIsMainCtaButtonVisible(
      (mainCtaButton.current as unknown as HTMLElement)?.getBoundingClientRect()
        .y > (mainCtaButton.current as unknown as HTMLElement)?.clientHeight
    );
  };

  useEffect(() => {
    document.addEventListener("scroll", checkMenuCtaButton);
  }, []);

  return (
    <Layout isMenuButtonAMainCtaButton={!isMainCtaButtonVisible}>
      <main className="m-main">
        <section className="m-section m-top-hero m-solution-hero">
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
                id="main-cta-button"
                ref={mainCtaButton}
                className="m-top-hero__action-button mdc-button mdc-button--unelevated cta-accent-button"
                onClick={() => (window.location.href = "./get-in-touch")}
              >
                Get in touch
              </Button>
            </div>
          </div>
        </section>
        <section className="m-section m-solution-video">
          <div className="m-section__content">
            <div className="m-solution-video__video-container">
              <iframe
                src="https://drive.google.com/file/d/1LX6aUjYMPFSh70V5xUAew0XW9NPJE03Z/preview"
                allow="autoplay"
                title="pitch-video"
              ></iframe>
            </div>
          </div>
        </section>
        <section className="m-section m-key-aspects">
          <h2 className="m-section__header">Key aspects</h2>
          <div className="m-section__content">
            <div className="m-key-aspects__list">
              <div className="m-key-aspects__item">
                <img
                  src="/img/key-aspect-illustration-1.svg"
                  alt="Modino values illustration - universal solution"
                  className="m-key-aspects__item-image"
                />
                <h3 className="m-key-aspects__item-title">
                  Universal solution
                </h3>
                <p className="m-key-aspects__item-description">
                  Whether you want to update software on machines, sensors,
                  robots, smart grid or information systems, measuring stations,
                  IP cameras, medical devices, servers, edge cloud
                  infrastructure, or even toys, Modino.io is able to handle it
                  all.
                </p>
              </div>
              <div className="m-key-aspects__item">
                <img
                  src="/img/key-aspect-illustration-2.svg"
                  alt="Modino values illustration - not hardware bound"
                  className="m-key-aspects__item-image"
                />
                <h3 className="m-key-aspects__item-title">
                  Not hardware bound
                </h3>
                <p className="m-key-aspects__item-description">
                  Software delivery is hardware-independent. Modino.io
                  containers adapt to the target hardware on IoT devices,
                  enabling updates regardless of the specific hardware
                  architecture and configuration. As long as it runs on a Linux
                  operating system, Modino.io can update it.
                </p>
              </div>
              <div className="m-key-aspects__item">
                <img
                  src="/img/key-aspect-illustration-3.svg"
                  alt="Modino values illustration - safe software delivery"
                  className="m-key-aspects__item-image"
                />
                <h3 className="m-key-aspects__item-title">
                  Safe software delivery
                </h3>
                <p className="m-key-aspects__item-description">
                  Atomic updates even in low network throughput environments.
                  Whether you need to update a remote EV charging station or an
                  ATM located in the countryside, Modino.io is able to deliver
                  reliable updates even with limited network throughput.
                </p>
              </div>
              <div className="m-key-aspects__item">
                <img
                  src="/img/key-aspect-illustration-4.svg"
                  alt="Modino values illustration - ensured software application"
                  className="m-key-aspects__item-image"
                />
                <h3 className="m-key-aspects__item-title">
                  Ensured software application
                </h3>
                <p className="m-key-aspects__item-description">
                  With our automatic rollback procedure, your devices will never
                  go offline, even if something goes wrong during the update
                  process.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="m-section m-manifesto">
          <h2 className="m-section__header">Security and quality manifesto</h2>
          <div className="m-section__content">
            <p className="m-manifesto-section__subtitle">
              Modino.io means safe
            </p>
            <div className="tiles-container">
              <div className="m-tile">
                <div className="m-tile__icon">
                  <img src="/img/icons/atom-icon.svg" />
                </div>
                <p className="m-tile__content">
                  Modino.io platform ensures safe software delivery – data to be
                  delivered are created as atomic updates which makes them
                  possible to be send and receive even with low network
                  throughput
                </p>
              </div>
              <div className="m-tile">
                <div className="m-tile__icon">
                  <img src="/img/icons/cloud_sync-icon.svg" />
                </div>
                <p className="m-tile__content">
                  Never be offline again - if the update fails, an automatic
                  rollback procedure starts. The device restores to the
                  previous, stable software version, and is still operational.
                </p>
              </div>
              <div className="m-tile">
                <div className="m-tile__icon">
                  <img src="/img/icons/update-icon.svg" />
                </div>
                <p className="m-tile__content">
                  With a purchased annual license, each client gets regular
                  updates including security, performance patches, and new
                  releases of the Modino.io system.
                </p>
              </div>
            </div>
            <img src="/img/demo-screenshot.png" className="m-demo-screenshot" />
            <hr className="m-manifesto__divider" />

            <div className="m-security__wrapper">
              <p className="m-manifesto-section__content m-security__title">
                Security is our second name.
                <br />
                Or, actually, the first
              </p>
              <div className="tiles-container m-security__text">
                <div className="m-tile">
                  <div className="m-tile__icon">
                    <img src="/img/icons/lan.svg" />
                  </div>
                  <p className="m-tile__content">
                    Modino.io is delivered as a set of interconnected OCI
                    containers running in non-privileged mode or when needed
                    with a specifically created security profile. Internally all
                    communication is done via TLS v1.3.
                  </p>
                </div>
                <div className="m-tile">
                  <div className="m-tile__icon">
                    <img src="/img/icons/encrypted.svg" />
                  </div>
                  <p className="m-tile__content">
                    Users are authenticated and authorized like any other system
                    actor with a "zero-trust" policy in mind. User accounts are
                    manageable with a deployed instance of an OpenID Connect
                    service that can be connected with the organization’s user
                    database (e.g. LDAP).
                  </p>
                </div>
                <div className="m-tile">
                  <div className="m-tile__icon">
                    <img src="/img/icons/support_agent.svg" />
                  </div>
                  <p className="m-tile__content">
                    Modino.io Agent installed on endpoint devices does not
                    require administrator privileges to run, and leverages TLS
                    mutual authentication to communicate with Modino.io
                    services.
                  </p>
                </div>
                <div className="m-tile">
                  <div className="m-tile__icon">
                    <img src="/img/icons/key.svg" />
                  </div>
                  <p className="m-tile__content">
                    Container images with software updates are encrypted and
                    signed with user keys that Modino.io does not have access
                    to. No personally identifiable information (PII) is stored.
                  </p>
                </div>
              </div>
              <img
                src="/img/Graph.svg"
                className="m-security__graph"
                alt="modino graph"
              />
            </div>
          </div>
        </section>
        <section className="m-section m-awards">
          <h2 className="m-section__header">Awards & Recognitions</h2>
          <div className="m-awards__content">
            <div className="m-awards__cybersecurity-banner">
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
            <div className="m-awards__cybersecurity-made">
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
        <section className="m-section m-advantages">
          <h2 className="m-section__header">Advantages</h2>
          <div className="m-section__content">
            <div className="cards-container">
              <div className="m-card">
                <div className="m-card__icon">
                  <img src="/img/icons/work.svg" alt="" />
                </div>
                <p className="m-card__title">Experience</p>
                <p className="m-card__content">
                  Our team has more than 15+ years of practical experience in
                  cryptography, encryption and software delivery.
                </p>
              </div>
              <div className="m-card">
                <div className="m-card__icon">
                  <img src="/img/icons/alt_route.svg" alt="" />
                </div>
                <p className="m-card__title">Flexibility</p>
                <p className="m-card__content">
                  Even if your IoT devices are not natively designed to be
                  updated, Modino.io can do it to keep your business safe.
                </p>
              </div>
              <div className="m-card">
                <div className="m-card__icon">
                  <img src="/img/icons/visibility.svg" alt="" />
                </div>
                <p className="m-card__title">Monitoring and detection</p>
                <p className="m-card__content">
                  Modino.io monitors malicious behaviour and provides an active
                  mitigation.
                </p>
              </div>
              <div className="m-card">
                <div className="m-card__icon">
                  <img src="/img/icons/volunteer.svg" alt="" />
                </div>
                <p className="m-card__title">Trust</p>
                <p className="m-card__content">
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
