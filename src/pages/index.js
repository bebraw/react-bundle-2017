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

const Journey = () => (
    <DarkSection>
        <a name="your-journey" />
        <SectionTitle>Your learning journey</SectionTitle>
        <Row>
            <SingleColumn>
                Basic Javascript<br />
                - eBook: Let's Learn Coding with Modern JavaScript<br />
                - es2017.io<br />
                <br />
                React Basics<br />
                - Course: Modern React with Redux<br />
                - React Quickly<br />
                - Learn React and Redux from A to Z<br />
                <br />
                Understand your build tools:<br />
                - SurviveJS<br />
                <br />
                Visualizations and 3rd party libraries<br />
                - React + D3v4<br />
                <br />
                Fullstack React with Node<br />
                - Universal Web with React<br />
                <br />
                React Native<br />
                - The Complete React Native and Redux Course<br />
                - React Native Quickly<br />
                <br />
                Deployment with React Native<br />
                - Automate Your React Native Releases with Fastlane & Bitrise<br
                />
                <br />
                Making money as an Engineer<br />
                - How to Become a Professional Programmer
            </SingleColumn>
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
        salesletterpt2 = findMarkdown(data, "sales-letter-pt2.md");

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
            <Journey />
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
