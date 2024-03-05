import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import Layout from "../../components/layout/layout.component";

const MeetTheTeam: React.FC<PageProps> = ({ data }) => {
  return <Layout>Meet the team</Layout>;
};

export default MeetTheTeam;

export const Head: HeadFC = () => <title>Home Page</title>;
