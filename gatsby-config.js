const {deepPurple, red} = require('@material-ui/core');

module.exports = {
  siteMetadata: {
    title: `Hyperspace`,
    description: `The fluffiest client for the fediverse`,
    author: `Hyperspace developers`,
    release: {
      static: "https://github.com/hyperspacedev/hyperspace-classic/releases/download/0.7.0/Hyperspace_0.7.0_static-files.zip",
      zip: "https://github.com/hyperspacedev/hyperspace-classic/archive/0.7.0.zip",
      targz: "https://github.com/hyperspacedev/hyperspace-classic/archive/0.7.0.tar.gz",
      win32: "https://github.com/hyperspacedev/hyperspace-classic/releases/download/0.7.0/Hyperspace.Setup.0.7.0.exe",
      mac: "https://github.com/hyperspacedev/hyperspace-classic/releases/download/0.7.0/Hyperspace-0.7.0.dmg",
      linux: {
        deb: "https://github.com/hyperspacedev/hyperspace-classic/releases/download/0.7.0/Hyperspace_0.7.0_amd64.deb",
        appimage: "https://github.com/hyperspacedev/hyperspace-classic/releases/download/0.7.0/Hyperspace.0.7.0.AppImage"
      }
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-jss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-copy-linked-files`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: true,
            },
          },
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/docs/`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 300
            }
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
        theme: {
          typography: {
            fontFamily: [
              '-apple-system',
              'BlinkMacSystemFont',
              '"Segoe UI"',
              'Roboto',
              '"Helvetica Neue"',
              'Arial',
              'sans-serif',
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
            ].join(','),
            useNextVariants: true,
          },
          palette: {
              primary: deepPurple,
              secondary: red,
          }
        },
      },
    },
  ],
}
