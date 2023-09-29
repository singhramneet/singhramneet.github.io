import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

function MainNavbar() {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="sticky-top">
            <Container>
                <Navbar.Brand href="#home">
                    <FontAwesomeIcon icon={faCode} size="lg" />{" "} Ramneet Singh
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#about">About Me</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#experience">Experience</Nav.Link>
                        <Nav.Link href="#education">Education</Nav.Link>
                        <Nav.Link href="https://github.com/singhramneet">
                            <FontAwesomeIcon icon={faGithub} size="lg" />
                        </Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/ramneet-singh-409b90220">
                            <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNavbar;