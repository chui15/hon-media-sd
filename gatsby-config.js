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
        start_url: '/',
        icon: 'src/images/HonLogo.png'
      }
    }
  ]
};
