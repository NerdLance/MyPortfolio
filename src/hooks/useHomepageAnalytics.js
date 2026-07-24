import React from "react";

export const trackHomepageEvent = (eventName, parameters = {}) => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("event", eventName, {
    route: "/",
    ...parameters,
  });
};

export const useHomepagePageView = () => {
  React.useEffect(() => {
    trackHomepageEvent("homepage_page_view");
  }, []);
};
