import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import SEO from "../../components/seo.component";

const PrivacyPolicy: React.FC<PageProps> = ({ data }) => {
  return <main>Privacy policy</main>;
};

export default PrivacyPolicy;

export const Head: HeadFC = () => (
  <SEO
    pageTitle="Modino.io - Privacy policy"
    description="Learn about Modino.io's privacy policy and protection of your personal data"
    link="https://modino.io/privacy-policy"
  />
);
