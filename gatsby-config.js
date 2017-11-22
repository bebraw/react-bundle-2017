module.exports = {
    siteMetadata: {
        title: `Learn how to build modern JavaScript apps from 7 expert authors`,
        description: ``,
        cover: `https://swizec.com/30/cover.jpg`
    },
    plugins: [
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
