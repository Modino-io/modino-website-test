import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import SEO from "../../components/seo.component";

const TermsOfService: React.FC<PageProps> = ({ data }) => {
  return <main>Terms of service</main>;
};

export default TermsOfService;

export const Head: HeadFC = () => (
  <SEO
    pageTitle="Modino.io - Updates Newsletter terms of service"
    description="Learn about Modino.io's Updates Newsletter terms of service"
    link="https://modino.io/terms-of-service"
  />
);
