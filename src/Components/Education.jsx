import Container from 'react-bootstrap/Container';
import SecttionHeadingHr from './SectionHeadingHr';

function Education() {
    return (

        <Container fluid="md" className="page-section" id="education">
            <SecttionHeadingHr sectionHeading="Education"/>
            <ul>
                <li>
                    <b>University of Winnipeg</b>
                    <br />
                    BSC in Applied Computer Science <small className="text-muted">August 2021 - December 2023 {"(Expected)"}</small>
                    <ul>
                        <li>
                        Gained experience in object oriented programming using Java and Python.
                        </li>
                        <li>
                        Developed a strong understanding of relational databases by writing complex SQL queries.
                        </li>
                        <li>
                        Gained hands-on experience working with HTML, CSS, JavaScript, Node.js ,Express.js and mongoDB.
                        </li>
                        <li>
                        Learned Project management skills including diagraming, agile and documentation.
                        </li>
                    </ul>
                </li>
            </ul>
        </Container>

    );
}

export default Education;