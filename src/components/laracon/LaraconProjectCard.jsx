import React from "react";

const ProjectMedia = ({ project }) => {
  const [hasImageError, setHasImageError] = React.useState(false);

  if (!project.image || hasImageError) {
    return (
      <div className="laracon-project-media laracon-project-placeholder" aria-hidden="true">
        <span>{project.name.charAt(0)}</span>
      </div>
    );
  }

  return (
    <div className={`laracon-project-media laracon-project-media-${project.slug}`}>
      <img
        src={project.image}
        alt={project.imageAlt}
        width={project.imageWidth}
        height={project.imageHeight}
        loading="lazy"
        decoding="async"
        onError={() => setHasImageError(true)}
      />
    </div>
  );
};

const LaraconProjectCard = ({ project }) => {
  return (
    <article
      className={`laracon-project-card${project.featured ? " is-featured" : ""}`}
      id={project.slug}
    >
      <ProjectMedia project={project} />
      <div className="laracon-project-copy">
        <div className="laracon-project-heading">
          <div>
            {project.featured && <span className="laracon-featured-label">Lead project</span>}
            <h3>{project.name}</h3>
          </div>
          <span className="laracon-status">{project.status}</span>
        </div>
        <p className="laracon-project-summary">{project.shortDescription}</p>
        <p>{project.longDescription}</p>
        <ul className="laracon-proof-list">
          {project.proofPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <ul className="laracon-tag-list" aria-label={`${project.name} technologies`}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        {project.externalUrl && (
          <a
            className="laracon-project-link"
            href={project.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.externalLabel}
            <span aria-hidden="true"> ↗</span>
          </a>
        )}
      </div>
    </article>
  );
};

export default LaraconProjectCard;
