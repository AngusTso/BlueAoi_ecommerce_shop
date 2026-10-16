import { useEffect } from "react";

/** Sets document.title for the current page (helps SEO + browser tabs). */
export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title
      ? `${title} · Blue Aoi Handmade Bracelets`
      : "Blue Aoi · Handmade Bracelets & Products";
  }, [title]);
}