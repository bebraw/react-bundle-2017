module.exports = {
    siteMetadata: {
        title: `Learn how to build modern JavaScript apps from 7 expert authors`,
        description: ``,
        cover: `https://bestjavascript.io/cover.gif`
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
        `gatsby-transformer-remark`
    ]
};
