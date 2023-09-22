import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";

const LiveProjectCard = ({ project }) => {
    const {
        name,
        description,
        image_url,
        live_url,
        softwares
    } = project;
    return (
        
            <Card className="col col-md-6 mx-auto card shadow-lg p-3 mb-5 bg-white rounded">
                <Card.Body>
                    <Card.Title as="h3">{name || <Skeleton />} </Card.Title>
                    <Card.Text>{(!description) ? "" : description || <Skeleton count={3} />} </Card.Text>
                    {softwares && <Card.Text>Built Using {softwares}</Card.Text>}
                    <hr />
                    <Card.Text><a target='_blank' rel='noreferrer' href={live_url}>{live_url}</a></Card.Text>
                </Card.Body>
            </Card>
        
    )
}

export default LiveProjectCard