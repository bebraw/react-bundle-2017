module.exports = {
    siteMetadata: {
        title: `Level Up Your Skills Before 2017 Ends`,
        description: `40 hours of video, 1000+ pages of expert guidance, 7 authors, 1 learning journey from start to employable engineer 👉 $99 just this week`,
        cover: `https://bestjavascript.io/cover.png`
    },
    plugins: [
        `gatsby-plugin-react-next`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-1464315-25"
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: []
            }
        }
    ]
};
