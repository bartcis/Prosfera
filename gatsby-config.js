module.exports = {
  pathPrefix: `/Prosfera`,
  siteMetadata: {
    title: `Prosfera`,
    description: `Private page of construction company`,
    author: `@bartekCis`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#2880be`,
        theme_color: `#2880be`,
        display: `standalone`,
        icon: `./src/images/prosfera_logo_black.svg`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `admin.pro-sfera.pl`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: true,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
          rule: {
            include: /assets/
          }
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-recaptcha`,
      options: {
         async: true,
         defer: false,
         args: `?onload=onloadCallback&render=6LcvhpkUAAAAADUTMhS6b9hozsWzMZJS-3I7_cfe`,
      },
   },
  ],
}
