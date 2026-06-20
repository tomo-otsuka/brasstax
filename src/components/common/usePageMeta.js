import { useEffect } from "react";

export const usePageMeta = ({ title, description }) => {
  useEffect(() => {
    const siteName = "Brass Tax";
    const fullTitle = title ? `${title} | ${siteName}` : siteName;

    document.title = fullTitle;

    const setMetaTag = (selector, content) => {
      let element = document.querySelector(selector);
      if (element && content) {
        element.setAttribute("content", content);
      }
    };

    if (description) {
      setMetaTag('meta[name="description"]', description);
      setMetaTag('meta[property="og:description"]', description);
      setMetaTag('meta[property="twitter:description"]', description);
    }

    setMetaTag('meta[property="og:title"]', fullTitle);
    setMetaTag('meta[property="twitter:title"]', fullTitle);

    // Update URL for og:url and twitter:url
    const currentUrl = window.location.href;
    setMetaTag('meta[property="og:url"]', currentUrl);
    // Twitter card url property is sometimes just url, or twitter:url, but we have twitter:url in index.html
    setMetaTag('meta[property="twitter:url"]', currentUrl);
  }, [title, description]);
};
