import * as productionConfig from "./config";

const cloneConfig = (value) => {
  if (Array.isArray(value)) {
    return value.map(cloneConfig);
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, nestedValue]) => [
        key,
        cloneConfig(nestedValue),
      ])
    );
  }

  return value;
};

// This creates a separate object graph for the experimental route. Add future
// /next-only content overrides in this file so production config remains intact.
const nextConfig = cloneConfig(productionConfig);

export const {
  navBar,
  mainBody,
  about,
  repos,
  liveProjects,
  unpublishedProjects,
  leadership,
  skills,
  getInTouch,
  experiences,
} = nextConfig;

export default nextConfig;
