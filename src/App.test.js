import { cleanup, render, screen } from "@testing-library/react";
import App from "./App";
import LaraconProjectCard from "./components/laracon/LaraconProjectCard";
import { mainBody as productionMainBody } from "./editable-stuff/config";
import { mainBody as nextMainBody } from "./editable-stuff/nextConfig";

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
  window.history.pushState({}, "", "/");
});

const renderRoute = (route) => {
  window.history.pushState({}, "", route);
  return render(<App />);
};

test("renders the production landing page at the root route", () => {
  renderRoute("/");

  expect(
    screen.getByRole("heading", { level: 1, name: /lance madden/i })
  ).toBeInTheDocument();
  expect(document.title).toBe("Lance Madden");
});

test("renders the independent experimental landing page", () => {
  renderRoute("/next");

  expect(
    screen.getByRole("heading", { level: 1, name: /lance madden/i })
  ).toBeInTheDocument();
  expect(document.title).toBe("Lance Madden | Experimental Preview");
  expect(nextMainBody).not.toBe(productionMainBody);
  expect(nextMainBody.icons).not.toBe(productionMainBody.icons);
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
