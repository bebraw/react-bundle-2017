import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import "bootstrap/dist/css/bootstrap.css";
import "../css/bootstrap-override.css";
import "../css/bootstrap-custom-utils.css";
import "../css/salesbury-lilac.css";

const title = "Learn React from 7 expert authors",
    description = "",
    image = "https://swizec.com/30/cover.jpg";

const TemplateWrapper = ({ children }) => (
    <div className="cheatsheet">
        <Helmet>
            <script async src="https://gumroad.com/js/gumroad.js" />

            <meta name="author" content="Swizec Teller" />
            <meta name="description" content={title} />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />

            <meta property="og:url" content="https://swizec.com/30" />
            <meta property="og:title" content={title} />
            <meta property="og:image" content={image} />
            <meta property="og:description" content={description} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@swizec" />
            <meta name="twitter:creator" content="@swizec" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            <title>{title}</title>
        </Helmet>
        {children()}
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func
};

export default TemplateWrapper;
