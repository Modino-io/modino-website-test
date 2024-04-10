import React from "react";

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents([
    <script
      type="text/plain"
      key="hotjar-script"
      data-category="targeting"
      dangerouslySetInnerHTML={{
        __html: `
        (function (h, o, t, j, a, r) {
          h.hj =
            h.hj ||
            function () {
              (h.hj.q = h.hj.q || []).push(arguments);
            };
          h._hjSettings = { hjid: 3626118, hjsv: 6 };
          a = o.getElementsByTagName("head")[0];
          r = o.createElement("script");
          r.async = 1;
          r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
          a.appendChild(r);
        })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
        `,
      }}
    />,
    <script
      type="text/plain"
      key="google-tag-manager-script"
      src="https://www.googletagmanager.com/gtag/js?id=G-56L4FRC93H"
      crossOrigin="anonymous"
      data-category="analytics"
      dangerouslySetInnerHTML={{ __html: `` }}
    />,
    <script
      type="text/plain"
      data-category="analytics"
      key="google-tag-manager-script2"
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-56L4FRC93H");`,
      }}
    />,
  ]);
};
