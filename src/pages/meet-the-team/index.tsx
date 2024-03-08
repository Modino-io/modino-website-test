import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import Layout from "../../components/layout/layout.component";

import Seo from "../../components/seo.component";
const MeetTheTeam: React.FC<PageProps> = ({ data }) => {
  return <Layout>Meet the team</Layout>;
};

export default MeetTheTeam;

export const Head: HeadFC = () => (
  <Seo
    pageTitle="Modino.io - meet the team"
    description="Check out the values we live by and meet the people behind Modino.io."
    link="https://modino.io/meet-the-team"
  />
);
