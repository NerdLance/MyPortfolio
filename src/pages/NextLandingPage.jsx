import PageMetadata from "../components/PageMetadata";
import CurrentProjectCard from "../components/next/CurrentProjectCard";
import FeaturedProduct from "../components/next/FeaturedProduct";
import NextNavigation from "../components/next/NextNavigation";
import PixelRain from "../components/next/PixelRain";
import Reveal from "../components/next/Reveal";
import {
  capabilityGroups,
  contactLinks,
  currentProjects,
  experienceHighlights,
  featuredProducts,
  metadata,
  navigation,
  opportunityTypes,
  personalNotes,
  proofPoints,
} from "../editable-stuff/nextConfig";
import {
  trackHomepageEvent,
  useHomepagePageView,
} from "../hooks/useHomepageAnalytics";
import "../scss/next.scss";

const SectionHeading = ({ eyebrow, title, children, id, invert = false }) => (
  <Reveal className={`next-section-heading${invert ? " is-inverted" : ""}`}>
    <p className="next-kicker">{eyebrow}</p>
    <div className="next-section-heading-grid">
      <h2 id={id}>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  </Reveal>
);

const NextLandingPage = () => {
  useHomepagePageView();

  return (
    <div className="next-page">
      <PageMetadata
        title={metadata.title}
        description={metadata.description}
        canonicalUrl={metadata.canonicalUrl}
        openGraphTitle={metadata.title}
        openGraphDescription={metadata.description}
        openGraphImage={metadata.socialImage}
        openGraphImageAlt={metadata.socialImageAlt}
        openGraphImageWidth={metadata.socialImageWidth}
        openGraphImageHeight={metadata.socialImageHeight}
        robots={metadata.robots}
        themeColor={metadata.themeColor}
      />

      <a className="next-skip-link" href="#next-content">
        Skip to content
      </a>

      <header className="next-hero" id="top">
        <PixelRain />
        <NextNavigation
          contactLinks={contactLinks}
          navigation={navigation}
        />

        <div className="next-hero-inner">
          <div className="next-hero-copy">
            <p className="next-hero-eyebrow">
              Backend-focused software engineer · Product builder
            </p>
            <h1>
              <span>Lance Madden.</span>
              I architect, build, and ship software.
            </h1>
            <p className="next-hero-intro">
              Working across Laravel, Node.js, Flutter, AI-powered SaaS, cloud
              infrastructure, and production applications.
            </p>
            <p className="next-hero-human">
              I’m happiest when an ambitious idea becomes something real people
              can use.
            </p>

            <div className="next-hero-actions" aria-label="Primary actions">
              <a className="next-button next-button-primary" href="#work">
                View My Work <span aria-hidden="true">↓</span>
              </a>
              <a
                className="next-button next-button-secondary"
                href={contactLinks.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackHomepageEvent("homepage_resume_download", {
                    placement: "hero",
                  })
                }
              >
                View Resume <span aria-hidden="true">↗</span>
              </a>
              <a
                className="next-button next-button-quiet"
                href="#contact"
                onClick={() =>
                  trackHomepageEvent("homepage_contact_cta_click", {
                    placement: "hero",
                  })
                }
              >
                Contact Me
              </a>
            </div>

            <div className="next-social-links" aria-label="Social profiles">
              <a
                href={contactLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackHomepageEvent("homepage_github_click", {
                    placement: "hero",
                  })
                }
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
              <a
                href={contactLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackHomepageEvent("homepage_linkedin_click", {
                    placement: "hero",
                  })
                }
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="next-hero-signature" aria-hidden="true">
            <span className="next-signature-orbit" />
            <span className="next-signature-code">build();</span>
            <span className="next-signature-note">
              architecture
              <br />
              → production
            </span>
          </div>
        </div>
      </header>

      <main id="next-content" tabIndex="-1">
        <section
          className="next-proof-section"
          aria-label="Career and product highlights"
        >
          <div className="next-container next-proof-grid">
            {proofPoints.map((point, index) => (
              <Reveal
                className="next-proof-item"
                delay={index * 60}
                key={point.label}
              >
                <strong>{point.value}</strong>
                <span>{point.label}</span>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          className="next-section next-work-section"
          id="work"
          aria-labelledby="work-heading"
        >
          <div className="next-container">
            <SectionHeading
              eyebrow="Featured products"
              title="Products built for real people."
              id="work-heading"
            >
              Founder-led products shaped from first architecture decisions
              through production constraints, payments, deployment, and ongoing
              use.
            </SectionHeading>

            <div className="next-featured-products">
              {featuredProducts.map((project, index) => (
                <FeaturedProduct
                  project={project}
                  index={index}
                  key={project.slug}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          className="next-section next-experience-section"
          id="experience"
          aria-labelledby="experience-heading"
        >
          <div className="next-container">
            <SectionHeading
              eyebrow="Experience behind the products"
              title="More than side projects."
              id="experience-heading"
              invert
            >
              Fifteen-plus years building across nonprofits, product companies,
              agencies, automation, and independent software.
            </SectionHeading>

            <div className="next-experience-list">
              {experienceHighlights.map((experience, index) => (
                <Reveal
                  as="article"
                  className="next-experience-item"
                  delay={index * 55}
                  key={`${experience.company}-${experience.role}`}
                >
                  <div className="next-experience-index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="next-experience-title">
                    <p>{experience.company}</p>
                    <h3>{experience.role}</h3>
                    <span>{experience.dates}</span>
                  </div>
                  <div className="next-experience-detail">
                    <p>{experience.summary}</p>
                    <ul>
                      {experience.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="next-experience-resume">
              <p>The complete timeline and supporting detail live in my resume.</p>
              <a
                className="next-button next-button-light"
                href={contactLinks.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackHomepageEvent("homepage_resume_download", {
                    placement: "experience",
                  })
                }
              >
                View Full Resume <span aria-hidden="true">↗</span>
              </a>
            </Reveal>
          </div>
        </section>

        <section
          className="next-section next-capabilities-section"
          id="skills"
          aria-labelledby="skills-heading"
        >
          <div className="next-container">
            <SectionHeading
              eyebrow="Technical capabilities"
              title="The stack follows the product."
              id="skills-heading"
            >
              I’m strongest in backend architecture, but I work across the
              complete path required to put a useful product in someone’s hands.
            </SectionHeading>

            <div className="next-capability-grid">
              {capabilityGroups.map((group, index) => (
                <Reveal
                  as="article"
                  className="next-capability-card"
                  delay={(index % 2) * 75}
                  key={group.title}
                >
                  <span className="next-capability-number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <ul className="next-capability-list">
                    {group.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          className="next-section next-building-section"
          aria-labelledby="building-heading"
        >
          <div className="next-container">
            <SectionHeading
              eyebrow="Currently building"
              title="Experiments with ambition."
              id="building-heading"
            >
              Active work that stretches into structured AI experiences and
              interconnected game systems.
            </SectionHeading>

            <div className="next-current-grid">
              {currentProjects.map((project, index) => (
                <Reveal
                  delay={index * 80}
                  direction={index === 0 ? "left" : "right"}
                  key={project.slug}
                >
                  <CurrentProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          className="next-section next-about-section"
          id="about"
          aria-labelledby="about-heading"
        >
          <div className="next-container next-about-grid">
            <Reveal className="next-about-story">
              <p className="next-kicker">A little beyond the code</p>
              <h2 id="about-heading">Curiosity with discipline.</h2>
              <p className="next-about-lead">
                I built my first video game in elementary school and never
                really stopped learning how systems work.
              </p>
              <p>
                Today that curiosity moves between software architecture, AI
                tooling, developer products, startups, games, and marketing.
                Being a founder taught me to care as much about the person using
                the product as the system underneath it.
              </p>
              <ul className="next-personal-notes">
                {personalNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </Reveal>

            <Reveal
              as="article"
              className="next-opportunity-card"
              delay={100}
              direction="right"
            >
              <p className="next-kicker">Open to good conversations</p>
              <h3>Work worth caring about.</h3>
              <p>
                I’m especially interested in mid-to-senior Laravel or Node.js
                backend opportunities, product-focused engineering teams, and
                roles involving architecture, APIs, SaaS, AI integrations, or
                mobile products.
              </p>
              <ul>
                {opportunityTypes.map((opportunity) => (
                  <li key={opportunity}>
                    <span aria-hidden="true">+</span> {opportunity}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="next-footer" id="contact">
        <PixelRain />
        <Reveal className="next-container next-footer-inner">
          <p className="next-kicker">Start a conversation</p>
          <h2>Let’s build something useful.</h2>
          <p>
            Whether you’re hiring, building a product, exploring AI workflows,
            or solving an interesting backend problem, I’d be glad to connect.
          </p>

          <div className="next-footer-actions">
            <a
              className="next-button next-button-primary"
              href={contactLinks.email}
              onClick={() => {
                trackHomepageEvent("homepage_email_click", {
                  placement: "footer",
                });
                trackHomepageEvent("homepage_contact_cta_click", {
                  placement: "footer",
                });
              }}
            >
              Email Me <span aria-hidden="true">↗</span>
            </a>
            <a
              className="next-button next-button-secondary"
              href={contactLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackHomepageEvent("homepage_linkedin_click", {
                  placement: "footer",
                })
              }
            >
              Connect on LinkedIn
            </a>
            <a
              className="next-button next-button-secondary"
              href={contactLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackHomepageEvent("homepage_github_click", {
                  placement: "footer",
                })
              }
            >
              View GitHub
            </a>
            <a
              className="next-button next-button-secondary"
              href={contactLinks.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackHomepageEvent("homepage_resume_download", {
                  placement: "footer",
                })
              }
            >
              Download Resume
            </a>
          </div>

          <div className="next-footer-note">
            <span>Lance Madden</span>
            <span>Rockport, Massachusetts</span>
            <a href={contactLinks.email}>Lance@LanceMadden.com</a>
          </div>
        </Reveal>
      </footer>
    </div>
  );
};

export default NextLandingPage;
