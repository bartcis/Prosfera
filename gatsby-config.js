module.exports = {
  pathPrefix: `/Prosfera`,
  siteMetadata: {
    title: `Prosfera - Instalacje sanitarne i zabezpieczenia p.pożarowe`,
    description: `Wrocławska firma zajmująca się wentylacjami, rekuperacją i zabezpieczeniami przeciw pożarowymi. 
    Sprawdź naszą ofertę.`,
    author: `@bartekCis`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#2880be`,
        theme_color: `#2880be`,
        display: `standalone`,
        icon: `./src/images/prosfera_logo_favi-min.png`,
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
    {
      resolve: `gatsby-plugin-recaptcha`,
      options: {
         async: true,
         defer: false,
         args: `?onload=onloadCallback&render=6LcvhpkUAAAAADUTMhS6b9hozsWzMZJS-3I7_cfe`,
      },
   },
   {
     resolve: `gatsby-plugin-favicon`,
     options: {
       logo: './src/images/prosfera_logo_favi-min.png',
       icons: {
         android: true,
         appleIcon: true,
         appleStartup: true,
         coast: false,
         favicons: true,
         firefox: true,
         opengraph: false,
         twitter: false,
         yandex: false,
         windows: false
       }
     }
   }
  ],
}
