import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `modino-website`,
    siteUrl: `https://www.modino.io`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-hotjar",
      options: {
        includeInDevelopment: false,
        id: 3626118,
        sv: 6,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: ["G-56L4FRC93H"],
        pluginConfig: {
          origin: "https://modino.io",
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `articles`,
        path: `${__dirname}/src/articles`,
      },
      __key: "articles",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `jobs`,
        path: `${__dirname}/src/jobs`,
      },
      __key: "jobs",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `./src/images`,
      },
      __key: "images",
    },
  ],
};

export default config;
