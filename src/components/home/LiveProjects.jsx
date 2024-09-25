import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
// import Row from "react-bootstrap/Row";
import LiveProjectCard from './LiveProjectCard';

const LiveProjects = ({heading, liveProjects}) => {
    return (
        <Jumbotron fluid id="projects" className="bg-light m-0">
            <Container className="">
                <h2 className="display-4 pb-5 text-center">{heading}</h2>
                
                    {liveProjects.length > 0 && liveProjects.map((project, index) => (
                        <LiveProjectCard
                            key={`project-card-${index}`}
                            id={`project-card-${index}`}
                            project={project}
                        />
                    ))}
                
            </Container>
        </Jumbotron>
    )
}

export default LiveProjects