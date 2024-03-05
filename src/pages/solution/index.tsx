import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import SEO from "../../components/seo.component";
import Layout from "../../components/layout/layout.component";

const Solution: React.FC<PageProps> = ({ data }) => {
  return <Layout>Solution</Layout>;
};

export default Solution;

export const Head: HeadFC = () => (
  <SEO
    pageTitle="Modino.io - Learn about our solution for your IoT devices"
    description="Discover how Modino.io solution works. Learn about our security and quality manifesto."
    link="https://modino.io/solution"
  />
);
