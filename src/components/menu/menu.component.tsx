import React from "react";
import "./menu.components.scss";
import { Link } from "gatsby";

const Menu: React.FC<any> = () => {
  const menu = document.getElementsByClassName("m-menu")[0];
  const menuNav = document.getElementsByClassName("m-menu__navigation")[0];
  const hamburgerMenuButton = document.getElementsByClassName(
    "m-menu__hamburger-button"
  )[0];

  const mobileMenu = document.getElementsByClassName(
    "m-mobile-menu"
  )[0] as HTMLElement;

  const toggleHamburgerMenu = () => {
    mobileMenu.classList.toggle("m-mobile-menu--expanded");

    if (mobileMenu.classList.contains("m-mobile-menu--expanded")) {
      mobileMenu.style.display = "flex";
      setTimeout(() => {
        mobileMenu.style.transform = "none";
      }, 100);
    } else {
      mobileMenu.style.transform = "translateX(100%)";
      setTimeout(() => {
        mobileMenu.style.display = "none";
      }, 300);
    }
  };

  return (
    <React.Fragment>
      <div className="m-menu">
        <header className="m-menu__wrapper">
          <nav className="m-menu__navigation">
            <Link className="m-menu__logo-link" to="./">
              <img
                className="m-menu__logo"
                src="/img/MODINO-logo-full.svg"
                alt="modino logo"
              />
            </Link>
            <div className="m-menu__actions">
              <Link
                to="/"
                className="m-menu__actions-link "
                activeClassName="m-menu__actions-link--active"
              >
                Home
              </Link>
              <Link
                to="/solution"
                className="m-menu__actions-link"
                activeClassName="m-menu__actions-link--active"
              >
                Solution
              </Link>
              <Link
                to="/articles"
                className="m-menu__actions-link"
                activeClassName="m-menu__actions-link--active"
              >
                Articles
              </Link>
              <Link
                to="/meet-the-team"
                className="m-menu__actions-link"
                activeClassName="m-menu__actions-link--active"
              >
                Meet the team
              </Link>
              <Link
                to="/partner-program"
                className="m-menu__actions-link"
                activeClassName="m-menu__actions-link--active"
              >
                Partner Program
              </Link>
              <Link
                to="/jobs"
                className="m-menu__actions-link"
                activeClassName="m-menu__actions-link--active"
              >
                Jobs
              </Link>
              <button
                className="mdc-button mdc-button--outlined m-menu__cta-button"
                onClick={() => (window.location.href = "./get-in-touch")}
              >
                <span className="mdc-button__ripple"></span>
                <span className="mdc-button__focus-ring"></span>
                <span className="mdc-button__label">Get in touch</span>
              </button>
              <button
                className="mdc-button m-menu__hamburger-button"
                onClick={toggleHamburgerMenu}
              >
                <span className="mdc-button__ripple"></span>
                <span className="mdc-button__label">
                  <img src="/img/hamburger-menu.svg" alt="hamburger menu" />
                </span>
              </button>
            </div>
          </nav>
        </header>
      </div>

      <aside className="m-mobile-menu m-menu">
        <div className="m-mobile-menu__header">
          <Link className="m-mobile-menu__logo-link" to="./">
            <img
              className="m-menu__logo"
              src="/img/MODINO-logo-short.svg"
              alt="modino logo"
            />
          </Link>

          <button
            className="mdc-button m-mobile-menu__hamburger-button"
            onClick={toggleHamburgerMenu}
          >
            <span className="mdc-button__ripple"></span>
            <span className="mdc-button__label">
              <img src="/img/hamburger-menu.svg" alt="hamburger menu" />
            </span>
          </button>
        </div>
        <div className="m-mobile-menu__actions">
          <Link
            to="/"
            className="m-mobile-menu__actions-link"
            activeClassName="m-mobile-menu__actions-link--active"
          >
            Home
          </Link>
          <Link
            to="/solution"
            className="m-mobile-menu__actions-link"
            activeClassName="m-mobile-menu__actions-link--active"
          >
            Solution
          </Link>
          <Link
            to="/articles"
            className="m-mobile-menu__actions-link"
            activeClassName="m-mobile-menu__actions-link--active"
          >
            Articles
          </Link>
          <Link
            to="/meet-the-team"
            className="m-mobile-menu__actions-link"
            activeClassName="m-mobile-menu__actions-link--active"
          >
            Meet the team
          </Link>
          <Link
            to="/partner-program"
            className="m-mobile-menu__actions-link"
            activeClassName="m-mobile-menu__actions-link--active"
          >
            Partner Program
          </Link>
          <Link
            to="/jobs"
            className="m-mobile-menu__actions-link"
            activeClassName="m-mobile-menu__actions-link--active"
          >
            Jobs
          </Link>
          <button
            className="mdc-button mdc-button--unelevated cta-accent-button m-mobile-menu__cta-button"
            onClick={() => (window.location.href = "./get-in-touch")}
          >
            <span className="mdc-button__ripple"></span>
            <span className="mdc-button__focus-ring"></span>
            <span className="mdc-button__label">Get in touch</span>
          </button>
        </div>
      </aside>
    </React.Fragment>
  );
};

export default Menu;
