import * as React from "react";
import { HeadFC, Link, PageProps, withPrefix } from "gatsby";
import Seo from "../../components/seo.component";
import Layout from "../../components/layout/layout.component";

import * as styles from "./index.module.scss";

const PrivacyPolicy = () => {
  return (
    <Layout shouldMenuBeDisplayed={false}>
      <main className="m-main">
        <div className={styles.mLegalWrapper}>
          <nav className={styles.mLegalNavigation}>
            <h2>Table of contents</h2>
            <ul>
              <li>
                <Link to="#h-processing">Processing personal data</Link>
                <ul>
                  <li>
                    <Link to="#h-controller">The Controller</Link>
                  </li>
                  <li>
                    <Link to="#h-personal">Personal data</Link>
                  </li>
                  <li>
                    <Link to="#h-recipients">Recipients of personal data</Link>
                  </li>
                  <li>
                    <Link to="#h-rights">Your rights</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#h-protection">Protection of personal data</Link>
                <ul>
                  <li>
                    <Link to="#h-data-storage">
                      Data storage and technical solutions
                    </Link>
                  </li>
                  <li>
                    <Link to="#h-third-party">Third-party software</Link>
                  </li>
                  <li>
                    <Link to="#h-cookies">Cookies and pixel tags</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#h-provisions">Other provisions</Link>
                <ul>
                  <li>
                    <Link to="#h-changes">Changes of privacy policy</Link>
                  </li>
                  <li>
                    <Link to="#h-governing">Governing law</Link>
                  </li>
                  <li>
                    <Link to="#h-questions">Questions and contact</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <section className={styles.mLegalText}>
            <h1 id="h-privacy" className={styles.mLegalTextHeader1}>
              Privacy policy
            </h1>
            <p>
              Welcome to Modino.io Privacy Policy.
              <br />
              <br />
              Your privacy is very important to us. This document contains all
              information on how we collect personal data, including information
              about how we store, use, transfer, and delete that data. It also
              explains how our website uses cookies. Our aim is to bring
              understanding and clarity on how personal data is processed at
              Modino.io.
            </p>
            <h2 id="h-processing" className={styles.mLegalTextHeader2}>
              Processing personal data
            </h2>
            <h3 id="h-controller" className={styles.mLegalTextHeader3}>
              The Controller
            </h3>
            <p>
              The Controller of your personal data is Modino.io sp. z o.o., with
              its registered office in Poland at Okopowa Street 14, 10-075
              Olsztyn, entered into the register of entrepreneurs by the
              District Court of Olsztyn, VIII Department of the National Court
              Register (Krajowy Rejestr Sądowy), under the entry number KRS
              908712, NIP (Taxpayer ID) 7393955632, REGON 38929761300000.
            </p>
            <h3 id="h-personal" className={styles.mLegalTextHeader3}>
              Personal data
            </h3>
            <p>
              We collect and process your data on your request and through the
              following:
            </p>
            <h4 className={styles.mLegalTextHeader4}>Contact form</h4>
            <p>
              The contact form is a basic way of communication with our
              specialists and getting updates about our product (optional). You
              can find it at{" "}
              <Link to="/get-in-touch">https://modino.io/get-in-touch</Link>. It
              allows you to send us an inquiry to contact you about our product
              and services, costs estimates and possible product demos.
              <br />
              <br />
              For the purpose of answering your inquiry, we collect the
              following data: name, e-mail address, phone number (optionally),
              and the role in the organization you represent. This data is used
              to answer your inquiry by our specialist to provide you with
              details about our products and services. If you mark the checkbox
              “Let me know about updates (optional),” your data will also be
              used for marketing/newsletter purposes to inform you about our
              services and product updates.
              <br />
              <br />
              The data is collected and processed only upon your consent
              (Article 6 par. 1 letter a of the GDPR). Your personal data will
              be stored in our potential clients database for an indefinite
              period of time.
              <br />
              Your data will be processed until you inform us about your
              withdrawal. You can withdraw your consent at any time by sending
              us a message to{" "}
              <a href="mailto:policy@modino.io">policy@modino.io</a>. After
              that, all your data will be erased from our database.
            </p>
            <h4 className={styles.mLegalTextHeader4}>Newsletter</h4>
            <p>
              We share information about our products and services by a
              newsletter.Signing up for the newsletter is voluntary and can be
              done at{" "}
              <Link to="/get-in-touch">https://modino.io/get-in-touch</Link>
              . We will be sending newsletters to your email on special
              occasions (e.g., a new release of the product or service), but we
              also reserve the right to change the frequency of this form of
              communication to, for example, once a month.
              <br />
              <br />
              For the purpose of sharing our marketing materials, we collect the
              following data: name and surname, e-mail address, phone number
              (optionally), and the position in the organization you represent.
              This data helps us to better understand our audience.The data is
              collected and processed upon your consent (Article 6 par. 1 letter
              a of the GDPR). Your personal data will be stored in our database
              for an indefinite period of time. The data is collected and
              processed to defend against any claims related to sending the
              newsletter, in particular to prove that the newsletter was sent on
              the basis of your consent, which is the Controller’s legitimate
              interest (Article 6 par. 1 letter f of the GDPR).
              <br />
              <br />
              Your data will be processed until you inform us about your
              withdrawal. You can withdraw your consent at any time by sending
              us a message to
              <a href="mailto:policy@modino.io"> policy@modino.io</a> or by
              following the “Unsubscribe” link in the email. After that, all
              your data will be erased from our database.
            </p>
            <h3 id="h-recipients" className={styles.mLegalTextHeader3}>
              Recipients of personal data
            </h3>
            <p>
              The recipients of personal data who are involved in the processing
              of your personal data are:
            </p>
            <ul>
              <li>the hosting provider who stores the data on the server,</li>
              <li>
                the cloud service provider where files that may contain your
                personal data are stored,
              </li>
              <li>
                the mailing system provider where your data is stored if you are
                a newsletter subscriber,
              </li>
              <li>
                the maintenance service provider who accesses the data if the
                technical work carried out relates to areas where your personal
                data is stored,
              </li>
              <li>
                other subcontractors whose scope of activities requires access
                to the data.
              </li>
            </ul>
            <p>
              All the entities mentioned above process your data on the basis of
              personal data processing entrustment agreements and guarantee an
              adequate level of personal data protection. If the need arises,
              your data may be accessed by a lawyer bound by professional
              secrecy.
            </p>
            <h3 id="h-rights" className={styles.mLegalTextHeader3}>
              Your rights
            </h3>
            <p>
              We collect and process your personal data only with your consent.
              It will be stored in our database for an indefinite period of time
              unless you withdraw your consent. All this time, you have the
              right to request from us:
            </p>
            <ul>
              <li>access to your personal data;</li>
              <li>correction of your personal data;</li>
              <li>erasure of your personal data;</li>
              <li>restriction of processing;</li>
              <li>data portability.</li>
            </ul>
            <p>
              We do not make decisions towards you based solely on automated
              processing, including profiling, which would produce legal effects
              towards you or similarly significantly affect you. And we do not
              transfer your personal information to third countries.
            </p>
            <h2 id="h-protection" className={styles.mLegalTextHeader2}>
              Protection of personal data
            </h2>
            <h3 id="h-data-storage" className={styles.mLegalTextHeader3}>
              Data storage and technical solutions
            </h3>
            <p>
              To ensure protection of your personal data we adopt appropriate
              data collection, storage and processing practices, as well as
              security measures, including encryption. We use third-party
              vendors and hosting partners for hardware, software, networking,
              storage, and related technology we need to run{" "}
              <Link to="/">https://modino.io/</Link>. Your personal data is
              stored in secured networks, accessible by a limited number of
              persons who have special access rights to these systems.
            </p>
            <h3 id="h-third-party" className={styles.mLegalTextHeader3}>
              Third-party software
            </h3>
            <p>
              We occasionally work with third parties who support us with
              services: Google Analytics tracking technologies. We use the
              Google Analytics tool provided by Google LLC, 1600 Amphitheatre
              Parkway, Mountain View, CA 94043, USA. We carry out these
              activities based on our legitimate interest in creating statistics
              and analyzing them in order to optimize the website. In order to
              use Google Analytics, we have implemented a special Google
              Analytics tracking code in the code of the website. The tracking
              code uses cookies from Google LLC concerning the Google Analytics
              service. You can block the Google Analytics tracking code at any
              time by installing a browser add-on provided by Google. Google
              Analytics automatically collects information about your use of the
              website. The information collected in this way is usually
              transmitted to and stored on Google servers, which may be located
              around the world. Due to the IP address anonymisation activated by
              us, your IP address is truncated before being passed on. Only in
              exceptional cases is the full IP address transmitted to Google's
              servers and shortened there. The anonymised IP address transmitted
              by your browser within the scope of Google Analytics is generally
              not combined with other Google data. We would like to emphasize
              that we do not collect any data within the scope of Google
              Analytics that would allow you to be identified. Therefore, the
              data collected within the framework of Google Analytics does not
              have the character of personal data for us. The information we
              have access to as part of Google Analytics is in particular:
            </p>
            <ul>
              <li>your operating system and browser,</li>
              <li>pages you view,</li>
              <li>
                the time you spend on the website and on individual pages,
              </li>
              <li>transitions between pages,</li>
              <li>the source you came to our site from,</li>
              <li>your approximate location, limited to your locality.</li>
            </ul>
            <p>
              Google Analytics and Google Analytics 360 services have been
              certified to the independent security standard ISO 27001. ISO
              27001 is one of the most widely recognised standards in the world
              and certifies that the systems operating Google Analytics and
              Google Analytics 360 meet the relevant requirements. If you are
              interested in the details related to Google's use of data from
              sites and applications that use Google services, we encourage you
              to read this information. We review these third-party vendors
              rigorously to ensure they meet our privacy standards and limit the
              data they can access to only what is necessary for them to perform
              their contracted tasks.
            </p>
            <p>
              We use Hotjar in order to better understand our users’ needs and
              to optimize this service and experience. Hotjar is a technology
              service that helps us better understand our users’ experience
              (e.g. how much time they spend on which pages, which links they
              choose to click, what users do and don’t like, etc.) and this
              enables us to build and maintain our service with user feedback.
              Hotjar uses cookies and other technologies to collect data on our
              users’ behavior and their devices. This includes a device's IP
              address (processed during your session and stored in a
              de-identified form), device screen size, device type (unique
              device identifiers), browser information, geographic location
              (country only), and the preferred language used to display our
              website. Hotjar stores this information on our behalf in a
              pseudonymized user profile. Hotjar is contractually forbidden to
              sell any of the data collected on our behalf.
              <br />
              For further details, please see the ‘about Hotjar’ section of{" "}
              <a
                href="https://help.hotjar.com/hc/en-us/sections/115003204947"
                target="_blank"
                rel="noopener"
              >
                Hotjar’s support site
              </a>
              .
            </p>
            <h3 id="h-cookies" className={styles.mLegalTextHeader3}>
              Cookies and pixel tags
            </h3>
            <p>
              We use various tracking methods such as cookies, pixel tags, and
              other technologies to receive information, which may include
              personal data from your browser (like IP-address; unique cookie
              identifier; unique device identifier and device type; domain;
              browser type and language; operating system and system settings;
              country and time zone; previously visited websites; information
              about your interaction with our website; and access times and
              referring URLs).
              <br />
              <br />
              We may also receive reports based on the use of these technologies
              by our service/analytics providers (like Google Analytics and
              Hotjar). We use those reports to obtain statistics about traffic
              and site interaction, so that we can improve our website and your
              experience. We do not link the information we store in cookies to
              any personal data you submit on our site.
              <br />
              <br />
              Third parties may also collect information via our website through
              cookies, third party plug-ins and widgets. These third parties
              collect data directly from your web browser and the processing of
              this data is subject to their own privacy policies.
              <br />
              <br />
              Some of the cookies will only be used if you use certain features
              or select certain preferences, and some cookies are essential to
              the website and will always be used.
            </p>

            <h4 className={styles.mLegalTextHeader4}>
              How and why we use them
            </h4>
            <p>
              <b>1. For the purpose of site usage (necessary).</b> These
              cookies, pixel tags and other technologies are essential for the
              website to provide the feature(s) you have requested.
              <i>Cookies: _cfuid; PHPSESSID.</i>
              <br />
              <b>2. For the purpose of analytics.</b> These cookies, pixel tags
              and other technologies collect information about how you interact
              with our website. We use Google Analytics and Hotjar cookies to
              understand how you arrive at and browse our products and website
              to identify areas for improvement such as navigation, user
              experience, and marketing campaigns.
            </p>
            <p id="cookie-table-label">Cookies:</p>
            <div className={styles.mCookiesTableContainer}>
              <table
                aria-describedby="cookie-table-label"
                className={styles.mCookiesTable}
              >
                <thead>
                  <tr className={styles.mCookiesTableHeaderRow}>
                    <th>Cookie name</th>
                    <th>Cookie category</th>
                    <th>Cookie provider</th>
                    <th>Cookie duration</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>cc_cookie</td>
                    <td>necessary</td>
                    <td>modino.io</td>
                    <td>5.5 months</td>
                    <td>Used by us to store user's cookie preferences</td>
                  </tr>
                  <tr>
                    <td>^_ga</td>
                    <td>analytics</td>
                    <td>modino.io</td>
                    <td>2 years</td>
                    <td>
                      Main cookie used by Google Analytics, enables a service to
                      distinguish one visitor from another
                    </td>
                  </tr>
                  <tr>
                    <td>^_hj</td>
                    <td>analytics</td>
                    <td>modino.io</td>
                    <td></td>
                    <td>
                      Cookies used by{" "}
                      <a href="https://help.hotjar.com/hc/en-us/articles/115009334567-What-is-Hotjar-">
                        Hotjar
                      </a>{" "}
                      analytics tool
                    </td>
                  </tr>
                  <tr>
                    <td>^_hjSessionUser_</td>
                    <td>analytics</td>
                    <td>modino.io</td>
                    <td>365 days</td>
                    <td>
                      Set when a user first lands on a page. Persists the Hotjar
                      User ID which is unique to that site. Hotjar does not
                      track users across different sites.
                    </td>
                  </tr>
                  <tr>
                    <td>_hjFirstSeen</td>
                    <td>analytics</td>
                    <td>modino.io</td>
                    <td>30 minutes, extended on user activity</td>
                    <td>Identifies a new user’s first session.</td>
                  </tr>
                  <tr>
                    <td>^_hjSession_</td>
                    <td>analytics</td>
                    <td>modino.io</td>
                    <td>30 minutes, extended on user activity</td>
                    <td>
                      Holds current session data. Ensures subsequent requests in
                      the session window are attributed to the same session.
                    </td>
                  </tr>
                  <tr>
                    <td>_hjAbsoluteSessionInProgress</td>
                    <td>analytics</td>
                    <td>modino.io</td>
                    <td>30 minutes, extended on user activity</td>
                    <td>
                      Used to detect the first pageview session of a user.
                    </td>
                  </tr>
                  <tr>
                    <td>^_hjIncludedInSessionSample_</td>
                    <td>analytics</td>
                    <td>modino.io</td>
                    <td>2 minutes, extended every 30 seconds</td>
                    <td>
                      Set to determine if a user is included in the data
                      sampling defined by your site's daily session limit.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h4 className={styles.mLegalTextHeader4}>How to manage cookies</h4>
            <p>
              You can deactivate cookies through a functionality built into your
              web browser. Browser manufacturers provide help pages relating to
              cookie management in their products. Please see below to learn
              more about how to control cookie settings through your browser:
              <br />
              <br />
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener"
              >
                Google Chrome;
              </a>
              <br />
              <a
                href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
                target="_blank"
                rel="noopener"
              >
                Mozilla Firefox;
              </a>
              <br />
              <a
                href="https://privacy.microsoft.com/en-us/windows-10-microsoft-edge-and-privacy"
                target="_blank"
                rel="noopener"
              >
                Microsoft Edge;
              </a>
              <br />
              <a
                href="https://support.microsoft.com/pl-pl/help/17442/windows-internet-explorer-delete-manage-cookies"
                target="_blank"
                rel="noopener"
              >
                Microsoft Internet Explorer;
              </a>
              <br />
              <a
                href="https://support.apple.com/"
                target="_blank"
                rel="noopener"
              >
                Safari.
              </a>
              <br />
              <br />
              Certain third-party advertising networks permit users to opt out
              of or customize preferences associated with your Internet
              browsing. Click here to customize Google cookies preferences. You
              can opt out of interest-based targeting provided by participating
              ad servers through the{" "}
              <a
                href="https://youradchoices.com/"
                target="_blank"
                rel="noopener"
              >
                Digital Advertising Alliance
              </a>
              . <br />
              <br />
              If you do not accept cookies you may not be able to use all
              aspects of our website. You will not be able to opt-out of any
              cookies or other technologies that are “strictly necessary” for
              the Services.
            </p>

            <h2 id="h-provisions" className={styles.mLegalTextHeader2}>
              Other provisions
            </h2>
            <h3 id="h-changes" className={styles.mLegalTextHeader3}>
              Changes of privacy policy
            </h3>
            <p>
              We may periodically update our Privacy Policy. We will inform you
              about the most significant changes, but some changes will be made
              without a notice. By using modino.io website you agree to be bound
              by the current version of our Privacy Policy published at{" "}
              <Link to="/privacy-policy">https://modino.io/privacy-policy</Link>
              . We encourage you to review this Privacy Policy periodically.
            </p>
            <h3 id="h-governing" className={styles.mLegalTextHeader3}>
              Governing law
            </h3>
            <p>
              Any claim relating to our Privacy Policy shall be governed by the
              laws of Poland without regard to its conflict of other law
              provisions.
            </p>
            <h3 id="h-questions" className={styles.mLegalTextHeader3}>
              Questions and contact
            </h3>
            <p>
              Contact us with any and all issues regarding processing of
              personal data or use of cookies / pixel tags. We also welcome your
              feedback about our Privacy Policy.
              <br />
              <br />
              Contact us at:
              <a href="mailto:policy@modino.io">policy@modino.io</a>
            </p>
            <img
              className={styles.mLegalImage}
              src={withPrefix("/img/modino-man-in-envelope.svg")}
              alt="modino man in an envelope"
            />
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default PrivacyPolicy;

export const Head: HeadFC = () => (
  <Seo
    pageTitle="Modino.io - Privacy policy"
    description="Learn about Modino.io's privacy policy and protection of your personal data"
    link="https://modino.io/privacy-policy"
  />
);
