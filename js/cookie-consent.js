// obtain plugin
var cc = initCookieConsent();

// run plugin with your configuration
cc.run({
  current_lang: "en",
  autoclear_cookies: true,
  page_scripts: true,

  onFirstAction: function (user_preferences, cookie) {
    // callback triggered only once
  },

  onAccept: function (cookie) {
    // ...
  },

  onChange: function (cookie, changed_preferences) {
    // ...
    console.log(cookie, changed_preferences);
  },

  gui_options: {
    consent_modal: {
      layout: "cloud",
      position: "bottom center",
      transition: "slide",
      swap_buttons: false,
    },
  },

  languages: {
    en: {
      consent_modal: {
        title: "We use cookies!",
        description:
          'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',
        primary_btn: {
          text: "Accept all",
          role: "accept_all", // 'accept_selected' or 'accept_all'
        },
        secondary_btn: {
          text: "Reject all",
          role: "accept_necessary", // 'settings' or 'accept_necessary'
        },
      },
      settings_modal: {
        title: "Cookie preferences",
        save_settings_btn: "Save settings",
        accept_all_btn: "Accept all",
        reject_all_btn: "Reject all",
        close_btn_label: "Close",
        cookie_table_headers: [
          { col1: "Name" },
          { col2: "Domain" },
          { col3: "Expiration" },
          { col4: "Description" },
        ],
        blocks: [
          {
            title: "Cookie usage 📢",
            description:
              'We use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="https://modino.io/privacy-policy" class="cc-link">privacy policy</a>.',
          },
          {
            title: "Strictly necessary cookies",
            description:
              "These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly",
            toggle: {
              value: "necessary",
              enabled: true,
              readonly: true,
            },
            cookie_table: [
              {
                col1: "cc_cookie",
                col2: "modino.io",
                col3: "5.5 months",
                col4: "Used by us to store user's cookie preferences",
              },
            ],
          },
          {
            title: "Performance and Analytics cookies",
            description:
              "These cookies allow the website to remember the choices you have made in the past",
            toggle: {
              value: "analytics",
              enabled: false,
              readonly: false,
            },
            cookie_table: [
              {
                col1: "^_ga",
                col2: "google.com",
                col3: "2 years",
                col4: "Main cookie used by Google Analytics, enables a service to distinguish one visitor from another",
                is_regex: true,
              },
              {
                col1: "^_hj",
                col2: "modino.io",
                col3: "",
                col4: 'Cookies used by <a href="https://help.hotjar.com/hc/en-us/articles/115009334567-What-is-Hotjar-" target="_blank" rel="noopener">Hotjar</a> analytics tool',
              },
              {
                col1: "^_hjSessionUser_",
                col2: "modino.io",
                col3: "365 days",
                col4: "Set when a user first lands on a page. Persists the Hotjar User ID which is unique to that site. Hotjar does not track users across different sites.",
                is_regex: true,
              },
              {
                col1: "_hjFirstSeen",
                col2: "modino.io",
                col3: "30 minutes, extended on user activity",
                col4: "Identifies a new user’s first session.",
              },
              {
                col1: "^_hjSession_",
                col2: "modino.io",
                col3: "30 minutes, extended on user activity",
                col4: "Holds current session data. Ensures subsequent requests in the session window are attributed to the same session.",
              },
              {
                col1: "_hjAbsoluteSessionInProgress",
                col2: "modino.io",
                col3: "30 minutes, extended on user activity",
                col4: "Used to detect the first pageview session of a user.",
              },
              {
                col1: "^_hjIncludedInSessionSample_",
                col2: "modino.io",
                col3: "2 minutes, extended every 30 seconds",
                col4: "Set to determine if a user is included in the data sampling defined by your site's daily session limit.",
                is_regex: true,
              },
            ],
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
});
