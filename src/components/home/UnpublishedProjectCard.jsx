import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";

const UnpublishedProjectCard = ({ project }) => {
    const {
        name,
        description,
        softwares
    } = project;
    return (
        
        // <Card className="col col-md-6 mx-auto card shadow-lg p-3 mb-5 bg-white rounded">
        <Col md={6}>
            <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
                <Card.Body>
                    <Card.Title as="h3">{name || <Skeleton />} </Card.Title>
                    <Card.Text>{(!description) ? "" : description || <Skeleton count={3} />} </Card.Text>
                    <hr />
                    {softwares && <Card.Text>Built Using {softwares}</Card.Text>}
                </Card.Body>
            </Card>
        </Col>
        
    )
}

export default UnpublishedProjectCard