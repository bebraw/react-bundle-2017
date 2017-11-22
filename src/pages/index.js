import React from "react";
import Link from "gatsby-link";

import { Row, Col } from "react-bootstrap";
import Section, {
    LowSection,
    DarkSection,
    SectionTitle
} from "../components/Section";
import { SingleColumn, WideLeftColumn } from "../components/Columns";
import Testimonial from "../components/Testimonials";
import BuyButton from "../components/BuyButton";

const Header = () => (
    <header className="text-left container">
        <Row>
            <Col md={11} mdOffset={1}>
                <h1>Level up your skills before 2017 ends</h1>
                <p className="lead">
                    Learn how to build modern JavaScript apps from 7 expert
                    authors
                </p>
            </Col>
        </Row>
    </header>
);

const SalesLetter = ({ part1, part2 }) => (
    <Section>
        <a name="bundle-sales-letter" />
        <Row>
            <WideLeftColumn
                dangerouslySetInnerHTML={{ __html: part1.html }}
                mdOffset={2}
            />
            <WideLeftColumn mdOffset={2}>
                <BuyButton />
            </WideLeftColumn>
            <WideLeftColumn
                dangerouslySetInnerHTML={{ __html: part2.html }}
                mdOffset={2}
            />
            <WideLeftColumn mdOffset={2}>
                <BuyButton />
            </WideLeftColumn>
        </Row>
    </Section>
);

const Journey = ({ copy }) => (
    <DarkSection>
        <a name="your-journey" />
        <SectionTitle>
            Your journey from beginner to well-paid engineer
        </SectionTitle>
        <Row>
            <SingleColumn
                dangerouslySetInnerHTML={{ __html: copy.html }}
                md={8}
            />
        </Row>
        <Row className="padding-big-top">
            <BuyButton />
        </Row>
    </DarkSection>
);

const Authors = () => (
    <Section>
        <a name="meet-the-authors" />
        <SectionTitle>Meet the authors</SectionTitle>
        <Row>
            <SingleColumn>Here are authors</SingleColumn>
        </Row>
    </Section>
);

const findMarkdown = (data, name) =>
    data.allMarkdownRemark.edges.find(({ node }) => node.id.includes(name))
        .node;

const IndexPage = ({ data }) => {
    const salesletterpt1 = findMarkdown(data, "sales-letter-pt1.md"),
        salesletterpt2 = findMarkdown(data, "sales-letter-pt2.md"),
        journey = findMarkdown(data, "learning-journey.md");

    return (
        <div>
            <div className="bg-white-dark padding-small-top" />
            <Header />
            <LowSection className>
                <Col md={10} mdOffset={0}>
                    <Testimonial which="ruturaj" />
                </Col>
            </LowSection>
            <SalesLetter part1={salesletterpt1} part2={salesletterpt2} />
            <Journey copy={journey} />
            <Authors />
        </div>
    );
};

export const query = graphql`
    query IndexQuery {
        allMarkdownRemark {
            edges {
                node {
                    id
                    html
                }
            }
        }
    }
`;

export default IndexPage;
