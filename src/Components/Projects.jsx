import { Card, Col, Row, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import SecttionHeadingHr from './SectionHeadingHr';


function Projects() {

    return (
        <Container fluid="md page-section" id="projects">
            <SecttionHeadingHr sectionHeading="Projects" />
            <Row xs={1} md={2} className="g-4 m-4 align-items-center" >
                <Col>
                    <Card>
                        <Card.Img className="project-image" variant="top" src={require("./WebSupport.jpg")} />
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
                <Col className="align-items-center">
                    <Card>
                        <Card.Img className="project-image" variant="top" src={require("./yarn.jpg")} />
                        <Card.Body>
                            <Card.Title>HR Cottex</Card.Title>
                            <Card.Text>
                                Developed a responsive website for HR Cottex (yarn manufacturer based in India) to showcase their products and enhance their online presence.
                            </Card.Text>
                            <h6>Skills Used:</h6>
                            React.js | HTML/CSS | Bootstrap | Typescript
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="outline-dark" href="https://hrcottex.com"><FontAwesomeIcon icon={faGlobe} size="lg" /></Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>

        </Container>
    );
}

export default Projects;