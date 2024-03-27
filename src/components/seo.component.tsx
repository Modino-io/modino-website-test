import { withPrefix } from "gatsby";
import React from "react";

const Seo: React.FC<{
  pageTitle: string;
  description: string;
  link: string;
}> = ({ pageTitle, description, link }) => {
  return (
    <React.Fragment>
      <meta charSet="utf-8" />
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#fafafa" />
      <meta name="robots" content="noindex,nofollow" />
      <link href={link} rel="canonical" />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <link rel="apple-touch-icon" href="icon.png" />
      <link rel="icon" href={withPrefix("/favicon.ico")} />
    </React.Fragment>
  );
};

export default Seo;
