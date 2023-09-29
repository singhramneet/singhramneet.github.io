import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faSquareJs, faJava, faPython, faNode, faReact, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { OffcanvasHeader } from 'react-bootstrap';
import SecttionHeadingHr from './SectionHeadingHr';

function Skills() {
    return (
        <Container fluid="md" className="text-center" id="skills">
            <div>
                <SecttionHeadingHr sectionHeading="Skills"/>
                <Row className="g-4 m-4" xs={2} md={4}>
                    <Col>
                        <FontAwesomeIcon icon={faHtml5} size="5x" />
                        <br />
                        HTML
                    </Col>
                    <Col>
                        <FontAwesomeIcon icon={faCss3Alt} size="5x" />
                        <br />
                        CSS
                    </Col>
                    <Col>
                        <FontAwesomeIcon icon={faSquareJs} size="5x" />
                        <br />
                        JavaScript
                    </Col>
                    <Col>
                        <FontAwesomeIcon icon={faPython} size="5x" />
                        <br />
                        Python
                    </Col>

                    <Col>
                        <FontAwesomeIcon icon={faJava} size="5x" />
                        <br />
                        Java
                    </Col>
                    <Col>
                        <FontAwesomeIcon icon={faNode} size="5x" />
                        <br />
                        NodeJS
                    </Col>
                    <Col>
                        <FontAwesomeIcon icon={faReact} size="5x" />
                        <br />
                        ReactJS
                    </Col>
                    <Col>
                        <FontAwesomeIcon icon={faBootstrap} size="5x" />
                        <br />
                        Bootstrap
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Skills;