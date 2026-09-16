"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

const scrollToDestination = () => {
  const id = window.location.hash.slice(1);
  const target = id ? document.getElementById(decodeURIComponent(id)) : null;

  if (target) {
    target.scrollIntoView({ behavior: "instant", block: "start" });
  } else {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }
};

export default function RouteScroll() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    // Route changes snap to their destination; same-page links keep CSS scrolling.
    scrollToDestination();
  }, [pathname]);

  useEffect(() => {
    const enableSmoothAnchorScroll = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      const destination = new URL(anchor.href);
      if (
        window.location.pathname === "/" &&
        destination.origin === window.location.origin &&
        destination.pathname === "/"
      ) {
        document.documentElement.dataset.smoothAnchors = "true";
      }
    };

    // Smooth scrolling starts only after an explicit homepage link click.
    document.addEventListener("click", enableSmoothAnchorScroll, true);
    return () => {
      document.removeEventListener("click", enableSmoothAnchorScroll, true);
      delete document.documentElement.dataset.smoothAnchors;
    };
  }, []);

  useEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    let frame = 0;

    const restoreHistoryDestination = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        // A different route is handled after its content mounts above.
        if (window.location.pathname === pathname) scrollToDestination();
      });
    };

    window.addEventListener("popstate", restoreHistoryDestination);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("popstate", restoreHistoryDestination);
      window.history.scrollRestoration = previous;
    };
  }, [pathname]);

  return null;
}
