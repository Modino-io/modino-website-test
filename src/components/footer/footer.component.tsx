import * as React from "react";
import { Link } from "gatsby";
import "./footer.component.scss";

const FooterComponent = () => {
  return (
    <footer className="m-footer">
      <div className="m-footer__content">
        <div className="m-footer__menu">
          <div className="m-footer__menu-section m-footer__company-info">
            <p className="m-footer__menu-section-title">Company</p>
            <p>
              Modino.io Sp. z.o.o <br />
              EU VAT no.: PL7393955632 <br />
              E-mail: hello@modino.io
            </p>
          </div>
          <div className="m-footer__menu-section">
            <p className="m-footer__menu-section-title">Explore</p>
            <ul className="m-footer__menu-section-list">
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
          <div className="m-footer__menu-section">
            <p className="m-footer__menu-section-title">Connect</p>
            <ul className="m-footer__menu-section-list">
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
        <div className="m-footer__links">
          <a
            className="m-footer__social-link"
            href="https://www.linkedin.com/company/modino-io"
            target="_blank"
            rel="noopener"
          >
            <img alt="linkedIn icon" src="/img/linkedin_white.svg" />
          </a>
          <div className="m-footer__copyright">
            <p>
              &#169; Modino.io{" "}
              <span id="footer-year">{new Date().getFullYear()}</span>. All
              rights reserved.
            </p>
            <div className="m-footer__copyright-links">
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
