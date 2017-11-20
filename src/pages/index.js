import React from "react";
import Link from "gatsby-link";

import { Row, Col } from "react-bootstrap";
import Section, { LowSection } from "../components/Section";

const Header = () => (
    <header className="text-left container">
        <Row>
            <Col md={10} mdOffset={2}>
                <h1>Learn React from 7 expert authors</h1>
                <p className="lead">tagline</p>
            </Col>
        </Row>
    </header>
);

const IndexPage = () => (
    <div>
        <div className="bg-white-dark padding-small-top" />
        <Header />
    </div>
);

export default IndexPage;
