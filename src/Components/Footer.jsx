import React from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#f8f9fa', padding: '20px 0' }} className='bg-dark' data-bs-theme="dark">
            <Container>
                <Row>
                    <Col md={6}>
                        <h5>Contact Me</h5>
                        <Form>
                            <Form.Group controlId="formBasicEmail" className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="formBasicMessage" className="mb-3">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col md={6}>
                        <h5>Useful Links</h5>
                        <ListGroup>
                            <ListGroup.Item><a href="/about">About Us</a></ListGroup.Item>
                            <ListGroup.Item><a href="/services">Services</a></ListGroup.Item>
                            <ListGroup.Item><a href="/privacy">Privacy Policy</a></ListGroup.Item>
                            <ListGroup.Item><a href="/terms">Terms & Conditions</a></ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col className="text-center">
                        <p>&copy; 2023 Ramneet Singh. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
