import * as React from "react";
import { HeadFC, PageProps } from "gatsby";

const MeetTheTeam: React.FC<PageProps> = ({ data }) => {
  return <main>Meet the team</main>;
};

export default MeetTheTeam;

export const Head: HeadFC = () => <title>Home Page</title>;
