import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { Button } from "@rmwc/button";

import * as styles from "./menu.components.module.scss";

const defaultProps = {
  isCtaButtonPrimary: true,
  displayMenu: true,
};

const Menu = ({
  isCtaButtonPrimary,
  displayMenu,
}: {
  isCtaButtonPrimary?: boolean;
  displayMenu?: boolean;
}) => {
  let menuNav: HTMLElement;

  const [isMobileMenuExpanded, setIsMobileMenuExpanded] = useState(false);
  const [isMenuSticky, setIsMenuSticky] = useState(false);

  useEffect(() => {
    menuNav = document.getElementsByClassName(
      styles.mMenuNavigation
    )[0] as HTMLElement;

    setIsMenuSticky(menuNav.getBoundingClientRect().top < window.scrollY);

    document.addEventListener("scroll", checkMenuCtaButton);
  }, []);

  const checkMenuCtaButton = () => {
    setIsMenuSticky(menuNav.getBoundingClientRect().top < window.scrollY);
  };

  const toggleHamburgerMenu = () => {
    setIsMobileMenuExpanded(!isMobileMenuExpanded);
  };

  return (
    <React.Fragment>
      <div className={styles.mMenu}>
        <header className={styles.mMenuWrapper}>
          <nav
            className={`${styles.mMenuNavigation} ${
              isMenuSticky ? styles.mMenuSticky : ""
            }`}
          >
            <Link className={styles.mMenuLogoLink} to="/">
              <img
                className={styles.mMenuLogo}
                src="/img/MODINO-logo-full.svg"
                alt="modino logo"
              />
            </Link>
            <div className={styles.mMenuActions}>
              {displayMenu && (
                <React.Fragment>
                  <Link
                    to="/"
                    className={styles.mMenuActionsLink}
                    activeClassName={styles.mMenuActionsLinkActive}
                  >
                    Home
                  </Link>
                  <Link
                    to="/solution"
                    className={styles.mMenuActionsLink}
                    activeClassName={styles.mMenuActionsLinkActive}
                    partiallyActive
                  >
                    Solution
                  </Link>
                  <Link
                    to="/articles"
                    className={styles.mMenuActionsLink}
                    activeClassName={styles.mMenuActionsLinkActive}
                    partiallyActive
                  >
                    Articles
                  </Link>
                  <Link
                    to="/meet-the-team"
                    className={styles.mMenuActionsLink}
                    activeClassName={styles.mMenuActionsLinkActive}
                    partiallyActive
                  >
                    Meet the team
                  </Link>
                  <Link
                    to="/partner-program"
                    className={styles.mMenuActionsLink}
                    activeClassName={styles.mMenuActionsLinkActive}
                    partiallyActive
                  >
                    Partner Program
                  </Link>
                  <Link
                    to="/jobs"
                    className={styles.mMenuActionsLink}
                    activeClassName={styles.mMenuActionsLinkActive}
                    partiallyActive
                  >
                    Jobs
                  </Link>
                  <Button
                    outlined={!isCtaButtonPrimary}
                    unelevated={isCtaButtonPrimary}
                    className={`${styles.mMenuCtaButton} ${
                      isCtaButtonPrimary ? "cta-accent-button" : ""
                    }`}
                    onClick={() => (window.location.href = "/get-in-touch")}
                  >
                    Get in touch
                  </Button>
                </React.Fragment>
              )}
              <Button
                className={styles.mMenuHamburgerButton}
                onClick={toggleHamburgerMenu}
              >
                <img src="/img/hamburger-menu.svg" alt="hamburger menu" />
              </Button>
            </div>
          </nav>
        </header>
      </div>

      <aside
        className={`${styles.mMobileMenu} ${styles.mMenu} ${
          isMobileMenuExpanded
            ? styles.mMobileMenuExpanded
            : styles.mMobileMenuHidden
        }`}
      >
        <div className={styles.mMobileMenuHeader}>
          <Link className={styles.mMenuLogoLink} to="/">
            <img
              className={styles.mMenuLogo}
              src="/img/MODINO-logo-short.svg"
              alt="modino logo"
            />
          </Link>

          <Button
            className={styles.mMobileMenuHamburgerButton}
            onClick={toggleHamburgerMenu}
          >
            <img src="/img/hamburger-menu.svg" alt="hamburger menu" />
          </Button>
        </div>
        <div className={styles.mMobileMenuActions}>
          <Link
            to="/"
            className={styles.mMobileMenuActionsLink}
            activeClassName={styles.mMobileMenuActionsLinkActive}
          >
            Home
          </Link>
          <Link
            to="/solution"
            className={styles.mMobileMenuActionsLink}
            activeClassName={styles.mMobileMenuActionsLinkActive}
            partiallyActive
          >
            Solution
          </Link>
          <Link
            to="/articles"
            className={styles.mMobileMenuActionsLink}
            activeClassName={styles.mMobileMenuActionsLinkActive}
            partiallyActive
          >
            Articles
          </Link>
          <Link
            to="/meet-the-team"
            className={styles.mMobileMenuActionsLink}
            activeClassName={styles.mMobileMenuActionsLinkActive}
            partiallyActive
          >
            Meet the team
          </Link>
          <Link
            to="/partner-program"
            className={styles.mMobileMenuActionsLink}
            activeClassName={styles.mMobileMenuActionsLinkActive}
            partiallyActive
          >
            Partner Program
          </Link>
          <Link
            to="/jobs"
            className={styles.mMobileMenuActionsLink}
            activeClassName={styles.mMobileMenuActionsLinkActive}
            partiallyActive
          >
            Jobs
          </Link>
          <Button
            unelevated
            className={`cta-accent-button ${styles.mMobileMenuCtaButton}`}
            onClick={() => (window.location.href = "/get-in-touch")}
          >
            Get in touch
          </Button>
        </div>
      </aside>
    </React.Fragment>
  );
};

Menu.defaultProps = defaultProps;

export default Menu;
