import PageMetadata from "../components/PageMetadata";
import LaraconProjectCard from "../components/laracon/LaraconProjectCard";
import {
  buildingInterests,
  contactLinks,
  projects,
  proofPoints,
  technologyGroups,
} from "../editable-stuff/laracon";
import "../scss/laracon.scss";

const pageTitle =
  "Lance Madden at Laracon | Software Engineer & Product Builder";
const pageDescription =
  "Meet Lance Madden at Laracon. Laravel and Node.js backend engineer, Flutter developer, SaaS founder, and builder of TripFern and Transcribe.plus.";
const canonicalUrl = "https://lancemadden.com/laracon";
const socialImage = "https://lancemadden.com/social-image.png";

const LaraconPage = () => {
  const orderedProjects = [...projects].sort(
    (firstProject, secondProject) =>
      firstProject.displayOrder - secondProject.displayOrder
  );

  return (
    <div className="laracon-page">
      <PageMetadata
        title={pageTitle}
        description={pageDescription}
        canonicalUrl={canonicalUrl}
        openGraphTitle={pageTitle}
        openGraphDescription={pageDescription}
        openGraphImage={socialImage}
      />

      <a className="laracon-skip-link" href="#laracon-content">
        Skip to content
      </a>

      <header className="laracon-hero">
        <nav className="laracon-nav" aria-label="Laracon page navigation">
          <a className="laracon-wordmark" href="#top" aria-label="Back to the top">
            <span aria-hidden="true">&lt;</span>Lance Madden<span aria-hidden="true"> /&gt;</span>
          </a>
          <a className="laracon-main-site-link" href={contactLinks.portfolio}>
            Main site
            <span aria-hidden="true"> →</span>
          </a>
        </nav>

        <div className="laracon-hero-content" id="top">
          <p className="laracon-eyebrow">
            <span aria-hidden="true" /> A page made for Laracon
          </p>
          <h1>Hello from Laracon!</h1>
          <p className="laracon-hero-thanks">Thanks for scanning my card.</p>
          <p className="laracon-hero-intro">
            I’m <strong>Lance Madden</strong>—a software engineer and product
            architect focused on Laravel, Node.js, Flutter, AI-powered products,
            and backend systems.
          </p>
          <p className="laracon-hero-human">
            I love taking ideas from rough architecture to software that real
            people can use.
          </p>

          <div className="laracon-hero-actions" aria-label="Primary actions">
            <a className="laracon-button laracon-button-primary" href={contactLinks.email}>
              Email me
            </a>
            <a className="laracon-button laracon-button-secondary" href="#projects">
              View my work
            </a>
            <a
              className="laracon-button laracon-button-secondary"
              href={contactLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
            </a>
          </div>

          <a className="laracon-quiet-link" href={contactLinks.portfolio}>
            Visit the main LanceMadden.com site
            <span aria-hidden="true"> →</span>
          </a>
        </div>

        <div className="laracon-hero-orbit" aria-hidden="true">
          <span className="laracon-orbit-dot" />
          <span className="laracon-orbit-line" />
          <span className="laracon-orbit-code">ship();</span>
        </div>
      </header>

      <main id="laracon-content">
        <section className="laracon-section laracon-proof-section" aria-labelledby="proof-heading">
          <div className="laracon-section-heading laracon-section-heading-compact">
            <p className="laracon-kicker">A little context</p>
            <h2 id="proof-heading">I build across the whole product.</h2>
          </div>
          <div className="laracon-proof-grid">
            {proofPoints.map((point) => (
              <div className="laracon-proof-card" key={point.value}>
                <strong>{point.value}</strong>
                <span>{point.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="laracon-section" id="projects" aria-labelledby="projects-heading">
          <div className="laracon-section-heading">
            <div>
              <p className="laracon-kicker">Selected work</p>
              <h2 id="projects-heading">Products I’ve taken seriously.</h2>
            </div>
            <p>
              Production software, active users, real constraints—and a couple
              of ambitious systems currently taking shape.
            </p>
          </div>
          <div className="laracon-project-grid">
            {orderedProjects.map((project) => (
              <LaraconProjectCard project={project} key={project.slug} />
            ))}
          </div>
        </section>

        <section className="laracon-build-section" aria-labelledby="building-heading">
          <div className="laracon-section laracon-build-inner">
            <div className="laracon-section-heading">
              <div>
                <p className="laracon-kicker">Where I do my best work</p>
                <h2 id="building-heading">What I enjoy building</h2>
              </div>
              <p>
                Systems with meaningful behavior behind the interface—and a
                clear path from idea to production.
              </p>
            </div>
            <ul className="laracon-interest-grid">
              {buildingInterests.map((interest, index) => (
                <li key={interest}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="laracon-section" aria-labelledby="technology-heading">
          <div className="laracon-section-heading">
            <div>
              <p className="laracon-kicker">The working set</p>
              <h2 id="technology-heading">Tools I reach for</h2>
            </div>
            <p>A focused stack chosen around the product, not the trend cycle.</p>
          </div>
          <div className="laracon-tech-groups">
            {technologyGroups.map((group) => (
              <div className="laracon-tech-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul className="laracon-tag-list">
                  {group.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="laracon-section laracon-personal-grid" aria-label="About Lance and opportunities">
          <article className="laracon-personal-card">
            <p className="laracon-kicker">Beyond the code</p>
            <h2>Builder, learner, and human.</h2>
            <p>
              I’m a lifelong self-directed learner, founder, Laracon attendee,
              and First-Degree Black Belt based in Rockport, Massachusetts.
            </p>
            <p>
              I’m usually thinking about software architecture, AI tooling,
              startups, games, developer products, or an interesting technical
              problem that deserves a clean solution.
            </p>
          </article>

          <article className="laracon-personal-card laracon-opportunity-card">
            <p className="laracon-kicker">Good conversations</p>
            <h2>What I’m open to</h2>
            <p>
              I’m especially interested in mid-to-senior Laravel or Node.js
              backend opportunities, product-focused engineering teams, and
              roles involving architecture, APIs, SaaS, AI integrations, or
              mobile products.
            </p>
            <ul>
              <li>Full-stack, Flutter, and mobile roles</li>
              <li>Startup and product teams</li>
              <li>Consulting or thoughtful collaboration</li>
              <li>Conversations with developers and founders</li>
            </ul>
          </article>
        </section>
      </main>

      <footer className="laracon-footer">
        <div className="laracon-footer-inner">
          <p className="laracon-kicker">Before you go</p>
          <h2>Let’s talk while we’re both at Laracon.</h2>
          <p>
            If something here overlaps with what you’re building—or you simply
            want to compare notes—I’d genuinely enjoy the conversation.
          </p>
          <div className="laracon-footer-actions">
            <a href={contactLinks.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={contactLinks.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={contactLinks.email}>Email</a>
            <a href={contactLinks.resume} target="_blank" rel="noopener noreferrer">
              Download resume
            </a>
            <a href={contactLinks.portfolio}>Main portfolio</a>
          </div>
          <div className="laracon-footer-note">
            <span>Lance Madden</span>
            <span>Rockport, Massachusetts</span>
            <a href={contactLinks.email}>Lance@LanceMadden.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LaraconPage;
