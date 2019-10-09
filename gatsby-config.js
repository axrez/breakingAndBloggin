module.exports = {
  siteMetadata: {
    title: `Emil Østergaard`,
    description: `My personal website and blog where i write about random tech-stuff (mostly js) I find interesting`,
    author: `@axrez`,
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
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Emil-Østergaard`,
        short_name: `eo`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#FFF`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
