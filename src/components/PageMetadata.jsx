import React from "react";

const PageMetadata = ({
  title,
  description,
  canonicalUrl,
  openGraphTitle,
  openGraphDescription,
  openGraphImage,
}) => {
  React.useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const updates = [
      { selector: 'meta[name="description"]', attribute: "name", key: "description", content: description },
      { selector: 'link[rel="canonical"]', attribute: "rel", key: "canonical", content: canonicalUrl, contentAttribute: "href" },
      { selector: 'meta[property="og:title"]', attribute: "property", key: "og:title", content: openGraphTitle },
      { selector: 'meta[property="og:description"]', attribute: "property", key: "og:description", content: openGraphDescription },
      { selector: 'meta[property="og:image"]', attribute: "property", key: "og:image", content: openGraphImage },
      { selector: 'meta[property="og:url"]', attribute: "property", key: "og:url", content: canonicalUrl },
      { selector: 'meta[property="og:type"]', attribute: "property", key: "og:type", content: canonicalUrl ? "website" : null },
      { selector: 'meta[name="twitter:card"]', attribute: "name", key: "twitter:card", content: canonicalUrl ? "summary_large_image" : null },
      { selector: 'meta[name="twitter:title"]', attribute: "name", key: "twitter:title", content: openGraphTitle },
      { selector: 'meta[name="twitter:description"]', attribute: "name", key: "twitter:description", content: openGraphDescription },
      { selector: 'meta[name="twitter:image"]', attribute: "name", key: "twitter:image", content: openGraphImage },
    ];

    const previousValues = updates.map((update) => {
      if (!update.content) return null;

      let element = document.querySelector(update.selector);
      const created = !element;
      if (!element) {
        element = document.createElement(update.attribute === "rel" ? "link" : "meta");
        element.setAttribute(update.attribute, update.key);
        document.head.appendChild(element);
      }

      const contentAttribute = update.contentAttribute || "content";
      const previousValue = element.getAttribute(contentAttribute);
      element.setAttribute(contentAttribute, update.content);

      return { element, created, previousValue, contentAttribute };
    });

    return () => {
      document.title = previousTitle;
      previousValues.forEach((previous) => {
        if (!previous) return;
        if (previous.created) {
          previous.element.remove();
        } else if (previous.previousValue === null) {
          previous.element.removeAttribute(previous.contentAttribute);
        } else {
          previous.element.setAttribute(
            previous.contentAttribute,
            previous.previousValue
          );
        }
      });
    };
  }, [
    canonicalUrl,
    description,
    openGraphDescription,
    openGraphImage,
    openGraphTitle,
    title,
  ]);

  return null;
};

export default PageMetadata;
