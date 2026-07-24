/* eslint-disable testing-library/no-container, testing-library/no-node-access */
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import App from "./App";
import LaraconProjectCard from "./components/laracon/LaraconProjectCard";
import PixelRain from "./components/next/PixelRain";
import ProjectMedia from "./components/next/ProjectMedia";

class ResizeObserverMock {
  observe() {}

  unobserve() {}

  disconnect() {}
}

beforeAll(() => {
  window.ResizeObserver = ResizeObserverMock;
  global.ResizeObserver = ResizeObserverMock;
});

afterEach(() => {
  cleanup();
  delete window.gtag;
  window.history.pushState({}, "", "/");
});

const renderRoute = (route) => {
  window.history.pushState({}, "", route);
  return render(<App />);
};

test("renders the production landing page at the root route", () => {
  renderRoute("/");

  expect(
    screen.getByRole("heading", {
      level: 1,
      name: /i architect, build, and ship software/i,
    })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { level: 3, name: "TripFern" })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { level: 3, name: "Transcribe.plus" })
  ).toBeInTheDocument();
  expect(document.title).toBe(
    "Lance Madden | Software Engineer & Product Builder"
  );
  expect(document.querySelector('meta[name="robots"]')).toHaveAttribute(
    "content",
    "index,follow"
  );
  expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://lancemadden.com/"
  );
  expect(document.querySelector('meta[property="og:url"]')).toHaveAttribute(
    "content",
    "https://lancemadden.com/"
  );
  expect(document.querySelector('meta[property="og:image:width"]')).toHaveAttribute(
    "content",
    "1200"
  );
  expect(document.querySelector('meta[property="og:image:height"]')).toHaveAttribute(
    "content",
    "630"
  );
  expect(document.querySelector('meta[name="twitter:image:alt"]')).toHaveAttribute(
    "content",
    expect.stringMatching(/software engineer and product builder/i)
  );
  expect(document.querySelector(".next-pixel-rain")).toBeInTheDocument();
  expect(document.querySelector("#next-content")).toHaveAttribute(
    "tabindex",
    "-1"
  );
  expect(
    screen.queryByRole("link", { name: "(978) 704-5900" })
  ).not.toBeInTheDocument();
  expect(screen.getAllByText(/built my first video game/i)).toHaveLength(1);

  const viewResumeLink = screen.getByRole("link", { name: "View Resume" });
  expect(viewResumeLink).toHaveAttribute(
    "href",
    "/resume/Lance-Madden-Resume.pdf"
  );
  expect(viewResumeLink).toHaveAttribute("target", "_blank");
  expect(viewResumeLink).not.toHaveAttribute("download");

  const downloadResumeLink = screen.getByRole("link", {
    name: "Download Resume",
  });
  expect(downloadResumeLink).toHaveAttribute(
    "href",
    "/resume/Lance-Madden-Resume.pdf"
  );
  expect(downloadResumeLink).toHaveAttribute(
    "download",
    "Lance-Madden-Resume.pdf"
  );
  expect(downloadResumeLink).not.toHaveAttribute("target");
});

test("redirects the retired preview route to the homepage and preserves its query", async () => {
  renderRoute("/next?source=preview");

  await waitFor(() => {
    expect(window.location.pathname).toBe("/");
  });
  expect(window.location.search).toBe("?source=preview");
  expect(
    screen.getByRole("heading", {
      level: 1,
      name: /i architect, build, and ship software/i,
    })
  ).toBeInTheDocument();
  expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://lancemadden.com/"
  );
});

test("reports the stable homepage page-view event", () => {
  window.gtag = jest.fn();

  renderRoute("/");

  expect(window.gtag).toHaveBeenCalledWith("event", "homepage_page_view", {
    route: "/",
  });

  fireEvent.click(screen.getByRole("link", { name: "View Resume" }));
  expect(window.gtag).toHaveBeenCalledWith(
    "event",
    "homepage_resume_download",
    {
      route: "/",
      placement: "hero",
    }
  );
});

test("returns focus to the mobile menu button when Escape closes navigation", () => {
  renderRoute("/");

  const menuButton = screen.getByRole("button", { name: "Menu" });
  fireEvent.click(menuButton);

  const workLink = screen.getByRole("link", { name: "Work" });
  workLink.focus();
  fireEvent.keyDown(window, { key: "Escape" });

  expect(menuButton).toHaveAttribute("aria-expanded", "false");
  expect(menuButton).toHaveFocus();
});

test("renders the Laracon landing page with projects and contact actions", () => {
  renderRoute("/laracon");

  expect(
    screen.getByRole("heading", { level: 1, name: /hello from laracon/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { level: 3, name: "TripFern" })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { level: 3, name: "Transcribe.plus" })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { level: 3, name: "SkillBound" })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { level: 3, name: "BitMinky" })
  ).toBeInTheDocument();
  expect(screen.getAllByRole("link", { name: /email/i })[0]).toHaveAttribute(
    "href",
    "mailto:Lance@LanceMadden.com"
  );
  expect(document.title).toBe(
    "Lance Madden at Laracon | Software Engineer & Product Builder"
  );
  expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://lancemadden.com/laracon"
  );
  expect(document.querySelector('meta[property="og:title"]')).toHaveAttribute(
    "content",
    "Lance Madden at Laracon | Software Engineer & Product Builder"
  );

  const viewResumeLink = screen.getByRole("link", { name: "View resume" });
  expect(viewResumeLink).toHaveAttribute(
    "href",
    "/resume/Lance-Madden-Resume.pdf"
  );
  expect(viewResumeLink).toHaveAttribute("target", "_blank");
  expect(viewResumeLink).not.toHaveAttribute("download");

  const downloadResumeLink = screen.getByRole("link", {
    name: "Download resume",
  });
  expect(downloadResumeLink).toHaveAttribute(
    "href",
    "/resume/Lance-Madden-Resume.pdf"
  );
  expect(downloadResumeLink).toHaveAttribute(
    "download",
    "Lance-Madden-Resume.pdf"
  );
  expect(downloadResumeLink).not.toHaveAttribute("target");
});

test("renders a graceful project placeholder when media is unavailable", () => {
  const projectWithoutMedia = {
    name: "Placeholder Project",
    slug: "placeholder-project",
    status: "In development",
    shortDescription: "A project without final media.",
    longDescription: "The card remains complete while artwork is pending.",
    technologies: ["Laravel"],
    proofPoints: ["No broken image element"],
    image: null,
    imageAlt: "",
    externalUrl: null,
    featured: false,
  };

  const { container } = render(
    <LaraconProjectCard project={projectWithoutMedia} />
  );

  expect(container.querySelector("img")).not.toBeInTheDocument();
  expect(container.querySelector(".laracon-project-placeholder")).toBeInTheDocument();
});

test("pauses the pixel rain when reduced motion is preferred", () => {
  const originalMatchMedia = window.matchMedia;
  window.matchMedia = jest.fn().mockImplementation(() => ({
    matches: true,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  }));

  const { container } = render(<PixelRain />);

  expect(container.querySelector(".next-pixel-rain")).toHaveClass("is-paused");
  expect(container.querySelector(".next-pixel-rain")).toHaveAttribute(
    "aria-hidden",
    "true"
  );

  window.matchMedia = originalMatchMedia;
});

test("renders a graceful next-page project placeholder when media is unavailable", () => {
  const { container } = render(
    <ProjectMedia
      project={{
        name: "Placeholder Product",
        slug: "placeholder-product",
        image: null,
        imageAlt: "",
      }}
    />
  );

  expect(container.querySelector("img")).not.toBeInTheDocument();
  expect(container.querySelector(".next-project-placeholder")).toBeInTheDocument();
});
