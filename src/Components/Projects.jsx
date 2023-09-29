import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import SecttionHeadingHr from './SectionHeadingHr';


function Projects() {

    return (
        <Container fluid="md page-section" id="projects">
            <SecttionHeadingHr sectionHeading="Projects"/>
            <Row xs={1} md={3} className="g-4 m-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src="path_to_project_image.jpg" /> {/* Replace with an image of your project */}
                        <Card.Body>
                            <Card.Title>WebSupport</Card.Title>
                            <Card.Text>
                                WebSupport is a comprehensive ticketing system web application designed to streamline client support processes.
                            </Card.Text>
                            <h6>Skills Used:</h6>
                            Node.js | Express.js | Pug (Template Engine) | MongoDB (Database) | RESTful APIs
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="outline-dark" href="https://github.com/WebSupportApp/WebSupport"><FontAwesomeIcon icon={faGithub} size="lg" /></Button>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    );
}

export default Projects;