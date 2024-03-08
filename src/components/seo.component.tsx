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
      <meta name="robots" content="index,follow" />

      <link href={link} rel="canonical" />
    </React.Fragment>
  );
};

export default Seo;
