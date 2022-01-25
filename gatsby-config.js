require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `TWOJEWIDZIMISIĘ`,
    description: `Salon optyczny TWOJEWIDZIMISIĘ.`,
    author: `Hubert Mazur`,
    twitterUsername: "@mazullo",
    image: "./favicon.ico",
    siteUrl: "http://www.twojewidzimisie.pl/",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-styled-components`,
    `gatsby-theme-material-ui`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TWOJEWIDZIMISIĘ`,
        short_name: `TWOJEWIDZIMISIĘ`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/792-scaled.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "hokf42yvskfi",
        accessToken: "ZrX8p3APL-gmx0gLNIEUuE7K9lD39npyhQIky3JLb7Y",
        // spaceId: process.env.CONTENTFUL_SPACE_ID,
        // accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
