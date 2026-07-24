import Reveal from "./Reveal";
import ProjectMedia from "./ProjectMedia";
import { trackHomepageEvent } from "../../hooks/useHomepageAnalytics";

const FeaturedProduct = ({ project, index }) => {
  return (
    <article
      className={`next-featured-product ${project.layout}`}
      id={project.slug}
    >
      <Reveal
        className="next-featured-visual"
        direction={project.layout === "image-right" ? "right" : "left"}
      >
        <ProjectMedia project={project} />
      </Reveal>

      <Reveal className="next-featured-copy" delay={90}>
        <div className="next-product-meta">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <p>{project.eyebrow}</p>
        </div>
        <h3>{project.name}</h3>
        <p className="next-product-headline">{project.headline}</p>
        <p className="next-product-description">{project.description}</p>

        <ul className="next-project-proof">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

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
              trackHomepageEvent("homepage_featured_project_click", {
                project: project.slug,
              })
            }
          >
            {project.externalLabel}
            <span aria-hidden="true"> ↗</span>
          </a>
        )}
      </Reveal>
    </article>
  );
};

export default FeaturedProduct;
