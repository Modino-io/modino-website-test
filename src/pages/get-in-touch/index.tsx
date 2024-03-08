import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import Seo from "../../components/seo.component";

import "./index.scss";

const GetInTouch: React.FC<PageProps> = ({ data }) => {
  return (
    <main className="m-request-main">
      <section className="m-form-section">
        <form className="m-form" id="request-access-form">
          <h1 className="m-form__title">Get in touch</h1>
          <div className="m-form__field-wrapper">
            <div className="mdc-text-field mdc-text-field--outlined">
              <input
                className="mdc-text-field__input"
                id="fullname-input"
                required
                name="fullname"
                aria-controls="fullname-input-helper-text"
                aria-describedby="fullname-input-helper-text"
                autoComplete="off"
              />
              <div className="mdc-notched-outline">
                <div className="mdc-notched-outline__leading"></div>
                <div className="mdc-notched-outline__notch">
                  <label
                    htmlFor="fullname-input"
                    className="mdc-floating-label"
                  >
                    Full name
                  </label>
                </div>
                <div className="mdc-notched-outline__trailing"></div>
              </div>
            </div>
            <div className="mdc-text-field-helper-line">
              <div
                id="fullname-input-helper-text"
                className="mdc-text-field-helper-text mdc-text-field-helper-text--validation-msg"
              >
                Field can't be empty
              </div>
            </div>
          </div>
          <div className="m-form__field-wrapper">
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
                  <label htmlFor="email-input" className="mdc-floating-label">
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
          <div className="m-form__field-wrapper">
            <div className="mdc-text-field mdc-text-field--outlined">
              <input
                className="mdc-text-field__input"
                id="phone-input"
                type="tel"
                pattern="[0-9]+"
                name="phone"
                autoComplete="off"
              />
              <div className="mdc-notched-outline">
                <div className="mdc-notched-outline__leading"></div>
                <div className="mdc-notched-outline__notch">
                  <label htmlFor="phone-input" className="mdc-floating-label">
                    Phone (optional)
                  </label>
                </div>
                <div className="mdc-notched-outline__trailing"></div>
              </div>
            </div>
            <div className="mdc-text-field-helper-line">
              <div
                id="phone-input-helper-text"
                className="mdc-text-field-helper-text mdc-text-field-helper-text--validation-msg"
              >
                Field can't be empty
              </div>
            </div>
          </div>
          <div className="m-form__field-wrapper">
            <div className="mdc-select mdc-select--outlined m-select mdc-select--required">
              <input type="hidden" name="company_role" required />
              <div
                className="mdc-select__anchor"
                aria-labelledby="outlined-select-label"
                aria-required="true"
                aria-controls="company-role-helper-text"
                aria-describedby="company-role-helper-text"
              >
                <span className="mdc-notched-outline">
                  <span className="mdc-notched-outline__leading"></span>
                  <span className="mdc-notched-outline__notch">
                    <span
                      id="outlined-select-label"
                      className="mdc-floating-label"
                    >
                      Company role (optional)
                    </span>
                  </span>
                  <span className="mdc-notched-outline__trailing"></span>
                </span>
                <span className="mdc-select__selected-text-container">
                  <span
                    id="demo-selected-text"
                    className="mdc-select__selected-text"
                  ></span>
                </span>
                <span className="mdc-select__dropdown-icon">
                  <svg
                    className="mdc-select__dropdown-icon-graphic"
                    viewBox="7 10 10 5"
                    focusable="false"
                  >
                    <polygon
                      className="mdc-select__dropdown-icon-inactive"
                      stroke="none"
                      fillRule="evenodd"
                      points="7 10 12 15 17 10"
                    ></polygon>
                    <polygon
                      className="mdc-select__dropdown-icon-active"
                      stroke="none"
                      fillRule="evenodd"
                      points="7 15 12 10 17 15"
                    ></polygon>
                  </svg>
                </span>
              </div>
              <div className="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth">
                <ul
                  className="mdc-deprecated-list"
                  role="listbox"
                  aria-label="Food picker listbox"
                >
                  <li
                    className="mdc-deprecated-list-item mdc-deprecated-list-item--selected"
                    aria-selected="true"
                    data-value=""
                    role="option"
                    tabIndex={0}
                  >
                    <span className="mdc-deprecated-list-item__ripple"></span>
                  </li>
                  <li
                    className="mdc-deprecated-list-item"
                    aria-selected="false"
                    data-value="Chief Executive Officer"
                    role="option"
                  >
                    <span className="mdc-deprecated-list-item__ripple"></span>
                    <span className="mdc-deprecated-list-item__text">
                      Chief Executive Officer
                    </span>
                  </li>
                  <li
                    className="mdc-deprecated-list-item"
                    aria-selected="false"
                    data-value="Chief Financial Officer"
                    role="option"
                  >
                    <span className="mdc-deprecated-list-item__ripple"></span>
                    <span className="mdc-deprecated-list-item__text">
                      Chief Financial Officer
                    </span>
                  </li>
                  <li
                    className="mdc-deprecated-list-item"
                    aria-selected="false"
                    data-value="Chief Technology Officer"
                    role="option"
                  >
                    <span className="mdc-deprecated-list-item__ripple"></span>
                    <span className="mdc-deprecated-list-item__text">
                      Chief Technology Officer
                    </span>
                  </li>
                  <li
                    className="mdc-deprecated-list-item"
                    aria-selected="false"
                    data-value="Developer"
                    role="option"
                  >
                    <span className="mdc-deprecated-list-item__ripple"></span>
                    <span className="mdc-deprecated-list-item__text">
                      Developer
                    </span>
                  </li>
                  <li
                    className="mdc-deprecated-list-item"
                    aria-selected="false"
                    data-value="DevOps"
                    role="option"
                  >
                    <span className="mdc-deprecated-list-item__ripple"></span>
                    <span className="mdc-deprecated-list-item__text">
                      {" "}
                      DevOps{" "}
                    </span>
                  </li>
                  <li
                    className="mdc-deprecated-list-item"
                    aria-selected="false"
                    data-value="Product Manager"
                    role="option"
                  >
                    <span className="mdc-deprecated-list-item__ripple"></span>
                    <span className="mdc-deprecated-list-item__text">
                      Product Manager
                    </span>
                  </li>
                  <li
                    className="mdc-deprecated-list-item"
                    aria-selected="false"
                    data-value="Product Owner"
                    role="option"
                  >
                    <span className="mdc-deprecated-list-item__ripple"></span>
                    <span className="mdc-deprecated-list-item__text">
                      Product Owner
                    </span>
                  </li>
                  <li
                    className="mdc-deprecated-list-item"
                    aria-selected="false"
                    data-value="Quality Assurance"
                    role="option"
                  >
                    <span className="mdc-deprecated-list-item__ripple"></span>
                    <span className="mdc-deprecated-list-item__text">
                      Quality Assurance
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <p
              id="company-role-helper-text"
              className="mdc-select-helper-text mdc-select-helper-text--validation-msg"
            >
              Field can't be empty
            </p>
          </div>
          <div className="m-form__checkbox-container">
            <div className="mdc-form-field">
              <div className="mdc-checkbox">
                <input
                  id="mailing-list-checkbox"
                  type="checkbox"
                  className="mdc-checkbox__native-control"
                  name="mailing_list"
                  value="true"
                />
                <div className="mdc-checkbox__background">
                  <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
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
              <label htmlFor="checkbox-1">
                Let me know about updates (optional)
              </label>
            </div>
            <div className="mdc-form-field">
              <div className="mdc-checkbox">
                <input
                  id="legal-checkbox"
                  type="checkbox"
                  className="mdc-checkbox__native-control"
                  name="legal"
                  value="true"
                  required
                />
                <div className="mdc-checkbox__background">
                  <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
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
                I have read and agree to the
                <a className="m-link" href="/privacy-policy">
                  Privacy Policy
                </a>{" "}
                and
                <a className="m-link" href="/terms-of-service">
                  Terms of Service
                </a>
              </label>
            </div>
          </div>
          <button className="mdc-button mdc-button--unelevated" type="submit">
            <span className="mdc-button__ripple"></span> Get in touch
          </button>
        </form>
      </section>
      <section className="m-image-section">
        <Link to="/">
          <img
            className="m-logo-img"
            src="/img/MODINO-logo-full-white.svg"
            alt="modino logo"
          />
        </Link>
        <img
          className="m-request-access-img"
          src="/img/modino-man-in-envelope.svg"
          alt="modino man in an envelope"
        />
      </section>
      <aside className="mdc-snackbar mdc-snackbar--leading">
        <div
          className="mdc-snackbar__surface"
          role="status"
          aria-relevant="additions"
        >
          <div className="mdc-snackbar__label" aria-atomic="false"></div>
        </div>
      </aside>
    </main>
  );
};

export default GetInTouch;

export const Head: HeadFC = () => (
  <Seo
    pageTitle="Modino.io - Let's keep your updates safe and secure"
    description="Interested in our technology? Let's get in touch and talk about how we can keep your IoT devices out of harm's way!"
    link="https://modino.io/get-in-touch"
  />
);
