import Container from 'react-bootstrap/Container';
import SecttionHeadingHr from './SectionHeadingHr';

function Experience() {
    return (
        <Container fluid="md page-section" id="experience">
            <SecttionHeadingHr sectionHeading="Experience"/>
            <ul>
                <li>
                    <b>University of Winnipeg</b>
                    <br />
                    Student Assistant - Technology Service Desk <small className="text-muted">August 2022 - Present</small>
                    <ul>
                        <li>
                        Delivered first-level technical support to faculty, staff, and students through various channels including phone, email, and in-person.                        </li>
                        <li>
                        Diagnosed and resolved issues related to desktop/laptop computers, printers, peripheral devices, telephone systems, and networking connectivity.                        </li>
                        <li>
                        Supported a broad range of software, including Microsoft Windows, Microsoft Office, MacOS applications, and bespoke internal software.
                        </li>
                        <li>
                        Logged and tracked service incidents (200+ tickets); escalated complex issues to appropriate specialist support groups
                        </li>
                        <li>
                        Engaged in continuous learning by reviewing technical documentation, replicating issues, and familiarizing with policies and procedures.
                        </li>
                    </ul>
                </li>
            </ul>
        </Container>

    );
}

export default Experience;