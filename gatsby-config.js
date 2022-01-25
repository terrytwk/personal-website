module.exports = {
  siteMetadata: {
    siteUrl: "https://terrytwk.github.io/",
    title: "terrytwk.github.io",
    description: "Personal website for Tae Wook (Terry) Kim",
    author: "Terry Kim",
    keywords:
      "Terry, Tae Wook, Tae, Wook, Taewok, Terry Kim, Tae Wook Kim, Kim",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "src/images/favicon.ico",
      },
    },
  ],
};
