module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-180922558-1" // Google Analytics / GA
        ],
      },
    },
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'hon-media-sd',
        short_name: 'hon-media',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#886FDB',
        display: 'standalone',
        icon: 'src/images/HonLogo2.png'
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.12,
        once: true,
        disable: false
      }
    }
  ]
};
