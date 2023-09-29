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
                    BSC in Applied Computer Science <small className="text-muted">August 2021 - Present {"(Graduating in January 2024)"}</small>
                    <ul>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </li>
                        <li>
                            Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Ornare quam viverra orci sagittis eu.
                        </li>
                        <li>
                            Non enim praesent elementum facilisis. Vitae congue eu consequat ac felis donec.
                        </li>
                        <li>
                            Arcu dictum varius duis at consectetur lorem. Sagittis nisl rhoncus mattis rhoncus. Semper feugiat nibh sed pulvinar. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae.
                        </li>
                    </ul>
                </li>
            </ul>
        </Container>

    );
}

export default Education;