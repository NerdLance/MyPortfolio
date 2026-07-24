import React from "react";

const PageMetadata = ({
  title,
  description,
  canonicalUrl,
  openGraphTitle,
  openGraphDescription,
  openGraphImage,
  openGraphImageAlt,
  openGraphImageWidth,
  openGraphImageHeight,
  robots,
  themeColor,
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
      { selector: 'meta[property="og:image:alt"]', attribute: "property", key: "og:image:alt", content: openGraphImageAlt },
      { selector: 'meta[property="og:image:width"]', attribute: "property", key: "og:image:width", content: openGraphImageWidth },
      { selector: 'meta[property="og:image:height"]', attribute: "property", key: "og:image:height", content: openGraphImageHeight },
      { selector: 'meta[property="og:url"]', attribute: "property", key: "og:url", content: canonicalUrl },
      { selector: 'meta[property="og:type"]', attribute: "property", key: "og:type", content: canonicalUrl ? "website" : null },
      { selector: 'meta[name="twitter:card"]', attribute: "name", key: "twitter:card", content: canonicalUrl ? "summary_large_image" : null },
      { selector: 'meta[name="twitter:title"]', attribute: "name", key: "twitter:title", content: openGraphTitle },
      { selector: 'meta[name="twitter:description"]', attribute: "name", key: "twitter:description", content: openGraphDescription },
      {
        selector: 'meta[name="twitter:image"], meta[property="twitter:image"]',
        attribute: "name",
        key: "twitter:image",
        content: openGraphImage,
        normalizeIdentityAttribute: true,
      },
      { selector: 'meta[name="twitter:image:alt"]', attribute: "name", key: "twitter:image:alt", content: openGraphImageAlt },
      { selector: 'meta[name="robots"]', attribute: "name", key: "robots", content: robots },
      { selector: 'meta[name="theme-color"]', attribute: "name", key: "theme-color", content: themeColor },
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
      const previousIdentityValue = element.getAttribute(update.attribute);
      const alternateIdentityAttribute =
        update.normalizeIdentityAttribute && update.attribute === "name"
          ? "property"
          : null;
      const previousAlternateIdentityValue = alternateIdentityAttribute
        ? element.getAttribute(alternateIdentityAttribute)
        : null;

      element.setAttribute(update.attribute, update.key);
      if (alternateIdentityAttribute) {
        element.removeAttribute(alternateIdentityAttribute);
      }
      element.setAttribute(contentAttribute, update.content);

      return {
        alternateIdentityAttribute,
        contentAttribute,
        created,
        element,
        identityAttribute: update.attribute,
        previousAlternateIdentityValue,
        previousIdentityValue,
        previousValue,
      };
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

        if (previous.previousIdentityValue === null) {
          previous.element.removeAttribute(previous.identityAttribute);
        } else {
          previous.element.setAttribute(
            previous.identityAttribute,
            previous.previousIdentityValue
          );
        }

        if (previous.alternateIdentityAttribute) {
          if (previous.previousAlternateIdentityValue === null) {
            previous.element.removeAttribute(
              previous.alternateIdentityAttribute
            );
          } else {
            previous.element.setAttribute(
              previous.alternateIdentityAttribute,
              previous.previousAlternateIdentityValue
            );
          }
        }
      });
    };
  }, [
    canonicalUrl,
    description,
    openGraphDescription,
    openGraphImage,
    openGraphImageAlt,
    openGraphImageHeight,
    openGraphImageWidth,
    openGraphTitle,
    robots,
    themeColor,
    title,
  ]);

  return null;
};

export default PageMetadata;
