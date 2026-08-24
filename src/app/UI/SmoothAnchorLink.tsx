"use client";

import { usePathname } from "next/navigation";
import type { AnchorHTMLAttributes, MouseEvent } from "react";

interface SmoothAnchorLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
}

const SmoothAnchorLink = ({
  href,
  onClick,
  ...props
}: SmoothAnchorLinkProps) => {
  const pathname = usePathname();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const destination = new URL(href, window.location.href);
    if (destination.pathname !== pathname || !destination.hash) return;

    const target = document.getElementById(decodeURIComponent(destination.hash.slice(1)));
    if (!target) return;

    event.preventDefault();
    window.history.pushState(null, "", destination.hash);
    target.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  };

  return <a href={href} onClick={handleClick} {...props} />;
};

export default SmoothAnchorLink;
