import ProjectMedia from "./ProjectMedia";
import { trackHomepageEvent } from "../../hooks/useHomepageAnalytics";

const CurrentProjectCard = ({ project }) => (
  <article className={`next-current-card accent-${project.accent}`}>
    <ProjectMedia project={project} compact />
    <div className="next-current-copy">
      <div className="next-current-heading">
        <h3>{project.name}</h3>
        <span>{project.status}</span>
      </div>
      <p>{project.description}</p>
      <ul
        className="next-tag-list"
        aria-label={`${project.name} technologies`}
      >
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
      {project.externalUrl && (
        <a
          className="next-arrow-link"
          href={project.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackHomepageEvent("homepage_current_project_click", {
              project: project.slug,
            })
          }
        >
          Follow the project <span aria-hidden="true">↗</span>
        </a>
      )}
    </div>
  </article>
);

export default CurrentProjectCard;
