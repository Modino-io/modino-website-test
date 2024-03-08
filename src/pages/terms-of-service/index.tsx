import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import Seo from "../../components/seo.component";
import Layout from "../../components/layout/layout.component";

import "./index.scss";
import "../../scss/legal.scss";

const TermsOfService: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main className="m-main m-privacy">
        <div className="m-privacy-wrapper">
          <section className="m-privacy-navigation">
            <h2>Table of contents</h2>
            <ul role="menu" className="m-privacy-navigation--menu">
              <li role="menuitem">
                <Link to="#h-general-provisions">§ 1 General provisions</Link>
              </li>
              <li role="menuitem">
                <Link to="#h-terms-of-service">§ 2 Terms of service</Link>
              </li>
              <li role="menuitem">
                <Link to="#h-contracts-with-service-provider">
                  § 3 Contracts with Service Provider
                </Link>
              </li>
              <li role="menuitem">
                <Link to="#h-personal-data">§ 4 Personal data</Link>
              </li>
              <li role="menuitem">
                <Link to="#h-complaints">§ 5 Complaints </Link>
              </li>
            </ul>
          </section>
          <section className="m-privacy-text m-privacy-text--decimal-lists">
            <h1 id="h-privacy" className="m-privacy-text__header1">
              Updates Newsletter – terms and conditions
            </h1>
            <h2 id="h-general-provisions" className="m-privacy-text__header2">
              § 1 General provisions
            </h2>
            <ul>
              <li>
                These regulations define the rules for the provision of
                electronic services, consisting of the delivery of the “Updates
                Newsletter” and of concluding a contract for the delivery of
                digital content under which payments are made with Customers'
                personal data.
              </li>
              <li>
                The Service Provider of the “Updates Newsletter” is Modino.io
                Limited Liability Company, Okopowa 14, 10-075 Olsztyn, Poland,
                registered by the District Court in Olsztyn, VIII Department of
                the National Court Register, under KRS number 908712, NIP
                7393955632, REGON 38929761300000.
              </li>
            </ul>
            <h2 id="h-terms-of-service" className="m-privacy-text__header2">
              § 2 Terms of service
            </h2>
            <ul>
              <li>
                The aim of the “Updates Newsletter” service is to keep our
                customers and visitors updated about Modino.io’s products,
                services, and activities.
              </li>
              <li>
                We send the “Updates Newsletter” to you via email on special
                occasions such as the release of a new version of software or a
                new service. However, we reserve the right to change the
                frequency and/or timing of the “Updates Newsletter” at any time.
              </li>
              <li>
                Signing up for the “Updates Newsletter” is voluntary and can be
                done at:{" "}
                <Link to="/get-in-touch">https://modino.io/get-in-touch</Link>.
              </li>
              <li>
                In order to benefit from the “Updates Newsletter” service, it is
                required to have an email address and access to the Internet. It
                is not necessary to meet any specific technical requirements
                apart from having installed a standard operating system and a
                standard web browser. Not having a standard operating system and
                a standard web browser installed makes it impossible to sign up
                for the “Updates Newsletter”.
              </li>
              <li>
                A subscription for the “Updates Newsletter” service entails
                filling a form available at{" "}
                <Link to="/get-in-touch">https://modino.io/get-in-touch</Link>{" "}
                with your name, surname, email address, and company role as well
                as marking down the checkbox “Let me know about updates
                (optional)”. Confirmation is done by clicking on the "Get in
                touch" button. Providing personal data is voluntary but
                necessary for the proper provision of the “Updates Newsletter”
                service.
              </li>
              <li>
                We do not require subscribers to confirm their email address
                upon signing up (single opt-in).
              </li>
            </ul>

            <h2
              id="h-contracts-with-service-provider"
              className="m-privacy-text__header2"
            >
              § 3 Contracts with Service Provider
            </h2>
            <ul>
              <li>
                By signing up for the “Updates Newsletter”, you conclude a
                contract with the Service Provider for the provision of
                electronic services and for the delivery of digital content,
                under which payment is made with personal data.
              </li>
              <li>
                The contract for the provision of electronic services (“Updates
                Newsletter”) is concluded for an indefinite period of time. You
                can terminate this agreement by unsubscribing from the
                subscriber list, which is done by sending a written statement to
                the following email address:
                <a href="mailto:policy@modino.io">policy@modino.io</a>.
              </li>
              <li>
                The contract for the delivery of digital content (“Updates
                Newsletter”) is concluded for an indefinite period of time.
              </li>
              <li>
                The Service Provider is responsible for the compliance of the
                digital content in the form of the “Updates Newsletter” on the
                terms described in chapter 5B of the Polish Act of 30th May 2014
                on Consumer’s Rights.
              </li>
              <li>
                Subscribing to the “Updates Newsletter” means that you agree to
                receiving marketing and commercial information by means of
                electronic communication in accordance with the act on the
                provision of electronic services (ustawa o świadczeniu usług
                drogą elektroniczną).
              </li>
            </ul>

            <h2 id="h-personal-data" className="m-privacy-text__header2">
              § 4 Personal data
            </h2>
            <ul>
              <li>
                We collect the following data for the purpose of sharing our
                marketing materials: name and surname, email address, phone
                number (optionally), and role in the organization.
              </li>
              <li>
                Providing personal data is voluntary but necessary for the
                provision of the “Updates Newsletter” service. The data is
                collected and processed upon your consent (Article 6 par. 1
                letter a of the GDPR) and under the conditions set out in our
                Privacy Policy.
              </li>
              <li>
                You may withdraw the consent to receive the “Updates Newsletter”
                service at any time. Your personal data is stored until you
                withdraw your consent and for the time necessary to secure or
                consider possible claims based on the Service Provider’s
                legitimate interest as the administrator after the withdrawal.
              </li>
              <br />
              <li>
                You can find more information about the terms of personal data
                processing in our{" "}
                <Link to="/privacy-policy">Privacy Policy</Link>.
              </li>
            </ul>

            <h2 id="h-complaints" className="m-privacy-text__header2">
              § 5 Complaints
            </h2>
            <ul>
              <li>
                Any complaints regarding the “Updates Newsletter” service should
                be submitted to the following email address:
                <a href="mailto:policy@modino.io">policy@modino.io</a>.
              </li>
              <li>
                The complaint should include the data of the person submitting
                the complaint, a description of the issues with the “Update
                Newsletter” service, and the expectations towards the settlement
                of the complaint. The personal data of the complainee is
                necessary to send information about the result of considering
                the complaint.
              </li>
              <li>Each complaint will be considered within 14 days.</li>
            </ul>

            <img
              className="m-privacy__image"
              src="/img/modino-man-in-envelope.svg"
              alt="modino man in an envelope"
            />
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default TermsOfService;

export const Head: HeadFC = () => (
  <Seo
    pageTitle="Modino.io - Updates Newsletter terms of service"
    description="Learn about Modino.io's Updates Newsletter terms of service"
    link="https://modino.io/terms-of-service"
  />
);
