import 'bootstrap/dist/css/bootstrap.min.css';

function SecttionHeadingHr(props) {
    return (       
        <div className="custom-hr mt-5 mb-5">
            <span className="hr-content">{props.sectionHeading}</span>
        </div>
    )
}

export default SecttionHeadingHr;