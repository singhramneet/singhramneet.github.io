import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container fluid className='footer p-5'>

            <Form action="https://formsubmit.co/singhramneet2621@gmail.com" method="POST">
                <Row>
                    <Col>
                        <h5>Contact Me</h5>
                        <Row>
                            <input type="hidden" name="_next" value="https://ramneetsingh.dev" />
                            <Form.Group as={Col} controlId="formBasicEmail" className="mb-3">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" name="name" placeholder="Full Name" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formBasicEmail" className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Email Address" />
                            </Form.Group>
                            <Form.Group controlId="formBasicMessage" className="mb-3">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Your Message" name="message" />
                            </Form.Group>

                        </Row>
                        <Button variant="outline-light" type="submit">
                            Submit
                        </Button>

                    </Col>


                </Row>

            </Form>
            <hr className="footer-hr" />
            <Row className="mt-4">
                <Col className="text-center">
                    <p>&copy; 2023 Ramneet Singh.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
