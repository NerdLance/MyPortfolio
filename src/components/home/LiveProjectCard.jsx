import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";

const LiveProjectCard = ({ project }) => {
    const {
        name,
        description,
        image_url,
        live_url,
    } = project;
    return (
        <Col md={6}>
            <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
                <Card.Body>
                    <Card.Title as="h3">{name || <Skeleton />} </Card.Title>
                    <Card.Text>{(!description) ? "" : description || <Skeleton count={3} />} </Card.Text>
                    <hr />
                    <Card.Text><a target='_blank' rel='noreferrer' href={live_url}>{live_url}</a></Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default LiveProjectCard