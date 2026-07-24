import React from "react";

const ProjectMedia = ({ project, compact = false }) => {
  const [hasImageError, setHasImageError] = React.useState(false);

  if (!project.image || hasImageError) {
    return (
      <div
        className={`next-project-media next-project-placeholder${
          compact ? " is-compact" : ""
        }`}
        aria-hidden="true"
      >
        <span>{project.name.charAt(0)}</span>
      </div>
    );
  }

  return (
    <div
      className={`next-project-media next-project-media-${project.slug}${
        compact ? " is-compact" : ""
      }`}
    >
      <div className="next-media-grid" aria-hidden="true" />
      <img
        src={project.image}
        alt={project.imageAlt}
        width={project.imageWidth}
        height={project.imageHeight}
        loading="lazy"
        decoding="async"
        onError={() => setHasImageError(true)}
      />
      {!compact && project.visualLabel && (
        <span className="next-media-label">{project.visualLabel}</span>
      )}
    </div>
  );
};

export default ProjectMedia;
