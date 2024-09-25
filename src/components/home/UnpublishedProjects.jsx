import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import UnpublishedProjectCard from './UnpublishedProjectCard';

const UnpublishedProjects = ({heading, subheading, unpublishedProjects}) => {
    return (
        <Jumbotron fluid id="unpublished-projects" className="bg-light m-0">
            <Container className="">
                <h2 className="display-4 pb-2 text-center">{heading}</h2>
                <h6 className="pb-5 text-center">{subheading}</h6>
                <Row>
                    {unpublishedProjects.length > 0 && unpublishedProjects.map((project, index) => (
                        <UnpublishedProjectCard
                            key={`project-card-${index}`}
                            id={`project-card-${index}`}
                            project={project}
                        />
                    ))}
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default UnpublishedProjects