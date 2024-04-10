import React, { useEffect } from "react";
import Menu from "../menu/menu.component";
import FooterComponent from "../footer/footer.component";

import * as cookies from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import "./layout.component.scss";

const defaultProps = {
  isMenuButtonAMainCtaButton: true,
  shouldMenuBeDisplayed: true,
};

const Layout = ({
  isMenuButtonAMainCtaButton,
  shouldMenuBeDisplayed,
  children,
}: React.PropsWithChildren<{
  isMenuButtonAMainCtaButton?: boolean;
  shouldMenuBeDisplayed?: boolean;
}>) => {
  useEffect(() => {
    cookies.run({
      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        analytics: {
          autoClear: {
            cookies: [
              {
                name: /^_ga/,
              },
              {
                name: "_gid",
              },
              {
                name: /^_hj/,
              },
              {
                name: /^_hjSessionUser_/,
              },
              { name: /_hjFirstSeen/ },
              { name: /^_hjSession_/ },
              { name: "_hjAbsoluteSessionInProgress" },
              { name: /^_hjIncludedInSessionSample_/ },
            ],
          },
        },
      },

      guiOptions: {
        consentModal: {
          layout: "cloud",
          position: "bottom center",
          equalWeightButtons: false,
        },
      },

      language: {
        default: "en",
        translations: {
          en: {
            consentModal: {
              title: "We use cookies",
              description:
                "Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent.",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              showPreferencesBtn: "Manage Individual preferences",
            },
            preferencesModal: {
              title: "Cookie preferences",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              savePreferencesBtn: "Save settings",
              closeIconLabel: "Close",
              sections: [
                {
                  title: "Cookie usage 📢",
                  description:
                    'We use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="https://modino.io/privacy-policy" class="cc-link">privacy policy</a>.',
                },
                {
                  title: "Strictly necessary cookies",
                  description:
                    "These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly",
                  linkedCategory: "necessary",
                  cookieTable: {
                    headers: {
                      name: "Name",
                      domain: "Domain",
                      exp: "Expiration",
                      desc: "Description",
                    },
                    body: [
                      {
                        name: "cc_cookie",
                        domain: "modino.io",
                        exp: "5.5 months",
                        desc: "Used by us to store user's cookie preferences",
                      },
                      {
                        name: "__cf_bm and _cfuvid",
                        domain: "vimeo.com",
                        exp: "",
                        desc: "Cookies used by Vimeo video player",
                      },
                    ],
                  },
                },
                {
                  title: "Performance and Analytics",
                  description:
                    "These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.",
                  linkedCategory: "analytics",
                  cookieTable: {
                    headers: {
                      name: "Name",
                      domain: "Domain",
                      exp: "Expiration",
                      desc: "Description",
                    },
                    body: [
                      {
                        name: "^_ga",
                        domain: "google.com",
                        exp: "2 years",
                        desc: "Main cookie used by Google Analytics, enables a service to distinguish one visitor from another",
                      },
                      {
                        name: "^_hj",
                        domain: "modino.io",
                        exp: "",
                        desc: 'Cookies used by <a href="https://help.hotjar.com/hc/en-us/articles/115009334567-What-is-Hotjar-" target="_blank" rel="noopener">Hotjar</a> analytics tool',
                      },
                      {
                        name: "^_hjSessionUser_",
                        domain: "modino.io",
                        exp: "365 days",
                        desc: "Set when a user first lands on a page. Persists the Hotjar User ID which is unique to that site. Hotjar does not track users across different sites.",
                      },
                      {
                        name: "_hjFirstSeen",
                        domain: "modino.io",
                        exp: "30 minutes, extended on user activity",
                        desc: "Identifies a new user’s first session.",
                      },
                      {
                        name: "^_hjSession_",
                        domain: "modino.io",
                        exp: "30 minutes, extended on user activity",
                        desc: "Holds current session data. Ensures subsequent requests in the session window are attributed to the same session.",
                      },
                      {
                        name: "_hjAbsoluteSessionInProgress",
                        domain: "modino.io",
                        exp: "30 minutes, extended on user activity",
                        desc: "Used to detect the first pageview session of a user.",
                      },
                      {
                        name: "^_hjIncludedInSessionSample_",
                        domain: "modino.io",
                        exp: "2 minutes, extended every 30 seconds",
                        desc: "Set to determine if a user is included in the data sampling defined by your site's daily session limit.",
                      },
                    ],
                  },
                },
                {
                  title: "More information",
                  description:
                    'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="mailto:hello@modino.io">contact us</a>.',
                },
              ],
            },
          },
        },
      },
    });
  }, []);
  return (
    <React.Fragment>
      <Menu
        isCtaButtonPrimary={isMenuButtonAMainCtaButton}
        displayMenu={shouldMenuBeDisplayed}
      />
      {children}
      <FooterComponent />
    </React.Fragment>
  );
};

Layout.defaultProps = defaultProps;

export default Layout;
