require(`dotenv`).config();

module.exports = {
  siteMetadata: {
    title: `Adrenalize Digital e-Commerce Starter`,
    description: `Kickstart your e-commerce project with Adrenalize Digital today!`,
    author: `Brad Smith`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-mdx',
    `gatsby-plugin-sass`,
  ],
}
