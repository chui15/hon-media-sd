module.exports = {
  plugins: [
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
    `gatsby-plugin-react-helmet`
  ]
};
