import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import SecttionHeadingHr from './SectionHeadingHr';

const AboutMe = () => {
    return (
        <Container id="about" fluid="md" className="about-me page-section">
            <SecttionHeadingHr sectionHeading="About Me" />
            <Row className="align-items-center">
                <Col>
                    <Image
                        src={require("./ramneet-profile.jpg")}
                        roundedCircle
                        fluid
                        alt="Profile Picture"
                    />
                </Col>
                <Col md={9} xs={6}>
                    Hello! I'm Ramneet, a passionate web developer and undergraduate student at The University of Winnipeg.
                    I like creating responsive and user-friendly web applications.
                    When I'm not coding, I love to spend my time watching cricket, reading books, or traveling the world.
                </Col>
            </Row>
        </Container>
    );
};

export default AboutMe;
