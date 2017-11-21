import React from "react";
import Link from "gatsby-link";

import { Row, Col } from "react-bootstrap";
import Section, {
    LowSection,
    GreenSection,
    SectionTitle
} from "../components/Section";
import { SingleColumn } from "../components/Columns";
import Testimonial from "../components/Testimonials";

const Header = () => (
    <header className="text-left container">
        <Row>
            <Col md={11} mdOffset={1}>
                <h1>Level up your skills before 2017 ends</h1>
                <p className="lead">
                    Learn how to build modern webapps from 7 expert authors
                </p>
            </Col>
        </Row>
    </header>
);

const Why = () => (
    <Section>
        <a name="why-bundle" />
        <Row>
            <SingleColumn>
                Pain<br />
                - stuck using stack overflow and random blogs in a disjointed,
                incorrect mess.<br />
                <br />
                Dream<br />
                - a coherent learning journey to go from beginner to
                employable/promotable/highpaid software engineer<br />
                <br />
                Fix<br />
                - our bundle<br />
                <br />
                Call to Action<br />
                - $99, just this week<br />
                <br />
                Social Proof<br />
                - testimonials<br />
                - $X00,000 copies sold all together<br />
                <br />
                Overcome Objections<br />
                - 110% money back guarantee (don't like it, get $110 back)<br />
                - similar bootcamp would cost $x0,000<br />
                - $99 is best investment you can make<br />
                - self-paced, go as fast as you want<br />
                - indie authors, answer questions on internets and emails<br />
                - 7 of the best experts out there<br />
                - combined experience of a billion years<br />
                <br />
                Uniqueness<br />
                - this bundle exists only now, when it's gone it's gone<br />
                <br />
                Call to Action<br />
                <br />
                Urgency<br />
                - sales close promptly on Friday after Thanksgiving<br />
                - no "sorry I missed can I still get it"
            </SingleColumn>
        </Row>
    </Section>
);

const Journey = () => (
    <GreenSection>
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
    </GreenSection>
);

const IndexPage = () => (
    <div>
        <div className="bg-white-dark padding-small-top" />
        <Header />
        <LowSection className="padding-big-bottom">
            <Col md={10} mdOffset={0}>
                <Testimonial which="ruturaj" />
            </Col>
        </LowSection>
        <Why />
        <Journey />
    </div>
);

export default IndexPage;
