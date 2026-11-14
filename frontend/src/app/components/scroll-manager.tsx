import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * On route change: scroll to the #hash target if present (retrying briefly while
 * lazy pages mount), otherwise scroll to the top. Without this, navigating from
 * the footer would leave the next page scrolled to the bottom.
 */
export function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    let tries = 0;
    let timer: number;
    const tryScroll = () => {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (tries++ < 20) {
        timer = window.setTimeout(tryScroll, 50);
      }
    };
    tryScroll();
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}
