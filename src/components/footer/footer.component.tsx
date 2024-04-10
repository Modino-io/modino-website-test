import * as React from "react";
import { Link, withPrefix } from "gatsby";
import * as styles from "./footer.component.module.scss";

const FooterComponent = () => {
  return (
    <footer className={styles.mFooter}>
      <div className={styles.mFooterContent}>
        <div className={styles.mFooterMenu}>
          <div
            className={`${styles.mFooterMenuSection} ${styles.mFooterCompanyInfo}`}
          >
            <p className={styles.mFooterMenuSectionTitle}>Company</p>
            <p>
              Modino.io Sp. z.o.o <br />
              EU VAT no.: PL7393955632 <br />
              E-mail: hello@modino.io
            </p>
          </div>
          <div className={styles.mFooterMenuSection}>
            <p className={styles.mFooterMenuSectionTitle}>Explore</p>
            <ul className={styles.mFooterMenuSectionList}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/solution">Solution</Link>
              </li>
              <li>
                <Link to="/articles">Articles</Link>
              </li>
            </ul>
          </div>
          <div className={styles.mFooterMenuSection}>
            <p className={styles.mFooterMenuSectionTitle}>Connect</p>
            <ul className={styles.mFooterMenuSectionList}>
              <li>
                <Link to="/meet-the-team">Meet the team</Link>
              </li>
              <li>
                <Link to="/partner-program">Partner Program</Link>
              </li>
              <li>
                <Link to="/jobs">Jobs</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.mFooterLinks}>
          <a
            className={styles.mFooterSocialLink}
            href="https://www.linkedin.com/company/modino-io"
            target="_blank"
            rel="noopener"
          >
            <img
              alt="linkedIn icon"
              src={withPrefix("/img/linkedin_white.svg")}
            />
          </a>
          <div className={styles.mFooterCopyright}>
            <p>
              &#169; Modino.io{" "}
              <span id="footer-year">{new Date().getFullYear()}</span>. All
              rights reserved.
            </p>
            <div>
              <Link to="/privacy-policy">Privacy policy</Link>
              <Link to="/terms-of-service">Terms of service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
