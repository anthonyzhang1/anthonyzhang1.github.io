import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Automatically scrolls to the top of the page after changing pages. This should be used in index.js. */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  /* Instantly scrolls to the top of the page after changing pages. */
  useEffect(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }), [pathname]);
}