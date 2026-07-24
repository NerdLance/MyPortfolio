import React from "react";
import { trackHomepageEvent } from "../../hooks/useHomepageAnalytics";

const NextNavigation = ({ contactLinks, navigation }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuButtonRef = React.useRef(null);

  React.useEffect(() => {
    if (!isOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key !== "Escape") return;

      setIsOpen(false);
      menuButtonRef.current?.focus();
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="next-nav" aria-label="Homepage navigation">
      <a className="next-wordmark" href="#top" onClick={closeMenu}>
        <span aria-hidden="true">&lt;</span>
        Lance Madden
        <span aria-hidden="true"> /&gt;</span>
      </a>

      <button
        ref={menuButtonRef}
        className="next-menu-button"
        type="button"
        aria-expanded={isOpen}
        aria-controls="next-navigation-links"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="next-menu-button-label">Menu</span>
        <span className="next-menu-icon" aria-hidden="true">
          <span />
          <span />
        </span>
      </button>

      <div
        className={`next-nav-panel${isOpen ? " is-open" : ""}`}
        id="next-navigation-links"
      >
        <div className="next-nav-links">
          {navigation.map((item) => (
            <a href={item.href} key={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </div>
        <a
          className="next-nav-resume"
          href={contactLinks.resume}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            closeMenu();
            trackHomepageEvent("homepage_resume_download", {
              placement: "navigation",
            });
          }}
        >
          Resume <span aria-hidden="true">↗</span>
        </a>
      </div>
    </nav>
  );
};

export default NextNavigation;
