import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import SEO from "../../components/seo.component";

const GetInTouch: React.FC<PageProps> = ({ data }) => {
  return <main>Get in touch</main>;
};

export default GetInTouch;

export const Head: HeadFC = () => (
  <SEO
    pageTitle="Modino.io - Let's keep your updates safe and secure"
    description="Interested in our technology? Let's get in touch and talk about how we can keep your IoT devices out of harm's way!"
    link="https://modino.io/get-in-touch"
  />
);
