import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import SEO from "../../components/seo.component";

const PartnerProgram: React.FC<PageProps> = ({ data }) => {
  return <main>Partner Program</main>;
};

export default PartnerProgram;

export const Head: HeadFC = () => (
  <SEO
    pageTitle="Modino.io - shaping cybersecurity with a partner program"
    description="Become part of the Modino Partner Program. Learn more about how we can collaborate and shape the future of cybersecurity."
    link="https://modino.io/partner-program"
  />
);
