"use client";

import type { Route } from "next";
import styles from "./navBar.module.css";
import { usePathname } from "next/navigation";
import Moon from "@/assets/moon.svg?react";
import Sun from "@/assets/sun.svg?react";
import { useThemeStore, type Theme } from "@/stores/themeStore";
import { useEffect, useRef, useState } from "react";
import NextLink, { type LinkProps } from "next/link";
import type { ComponentType } from "react";

// Adapt Next’s generated JSX return type to the app’s React types.
const Link = NextLink as unknown as ComponentType<LinkProps<string>>;

const isTheme = (value: string | undefined): value is Theme =>
  value === "light" || value === "dark";

interface NavBarItems {
  href: Route;
  label: string;
}

const links: NavBarItems[] = [
  { href: "/", label: "Home" },
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

const NavBar = () => {
  const pathname = usePathname();
  const themeFramesRef = useRef<number[]>([]);
  const [activeAnchor, setActiveAnchor] = useState("top");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useThemeStore((state) => state.theme);
  const initializeTheme = useThemeStore((state) => state.initializeTheme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  const changeThemeInstantly = () => {
    const root = document.documentElement;
    themeFramesRef.current.forEach(window.cancelAnimationFrame);
    themeFramesRef.current = [];
    root.classList.add("theme-switching");
    toggleTheme();

    const firstFrame = window.requestAnimationFrame(() => {
      const secondFrame = window.requestAnimationFrame(() => {
        root.classList.remove("theme-switching");
        themeFramesRef.current = [];
      });
      themeFramesRef.current.push(secondFrame);
    });
    themeFramesRef.current.push(firstFrame);
  };

  useEffect(() => {
    const syncFromDocument = () => {
      const documentTheme = document.documentElement.dataset.theme;

      if (
        isTheme(documentTheme) &&
        documentTheme !== useThemeStore.getState().theme
      ) {
        initializeTheme(documentTheme);
      }
    };

    const initialTheme = document.documentElement.dataset.theme;
    if (isTheme(initialTheme)) initializeTheme(initialTheme);

    const observer = new MutationObserver(syncFromDocument);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, [initializeTheme]);

  useEffect(
    () => () => {
      themeFramesRef.current.forEach(window.cancelAnimationFrame);
      document.documentElement.classList.remove("theme-switching");
    },
    [],
  );

  useEffect(() => {
    if (pathname !== "/") return;

    const sectionIds = ["work", "about", "contact"];
    let animationFrame = 0;
    let isManualScroll = false;
    const markManualScroll = () => { isManualScroll = true; };
    const stopManualScroll = () => { isManualScroll = false; };
    const handleScrollKey = (event: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(event.key)) {
        markManualScroll();
      }
    };

    const updateActiveAnchor = () => {
      animationFrame = 0;
      // A queued scroll event can outlive this route during Back/Forward navigation.
      if (window.location.pathname !== "/") return;
      const marker = window.scrollY + Math.min(160, window.innerHeight * 0.2);
      let nextAnchor = "top";

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;

        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        if (sectionTop <= marker) nextAnchor = id;
      }

      setActiveAnchor((currentAnchor) =>
        currentAnchor === nextAnchor ? currentAnchor : nextAnchor,
      );

      const nextUrl =
        nextAnchor === "top"
          ? `${window.location.pathname}${window.location.search}`
          : `${window.location.pathname}${window.location.search}#${nextAnchor}`;
      const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;

      if (isManualScroll && currentUrl !== nextUrl) {
        // Let Next.js sync its router state and preserve its own history metadata.
        window.history.replaceState(null, "", nextUrl);
      }
    };

    const requestUpdate = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(updateActiveAnchor);
    };

    const startTracking = () => {
      requestUpdate();
      window.addEventListener("scroll", requestUpdate, { passive: true });
      window.addEventListener("resize", requestUpdate);
    };

    // Do not replace an incoming fragment before the browser has reached it.
    if (document.readyState === "complete") startTracking();
    else window.addEventListener("load", startTracking, { once: true });
    window.addEventListener("wheel", markManualScroll, { passive: true });
    window.addEventListener("touchmove", markManualScroll, { passive: true });
    window.addEventListener("keydown", handleScrollKey);
    window.addEventListener("click", stopManualScroll, true);
    window.addEventListener("popstate", stopManualScroll);

    return () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("load", startTracking);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.removeEventListener("wheel", markManualScroll);
      window.removeEventListener("touchmove", markManualScroll);
      window.removeEventListener("keydown", handleScrollKey);
      window.removeEventListener("click", stopManualScroll, true);
      window.removeEventListener("popstate", stopManualScroll);
    };
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  return (
    <div className={styles.navWrapper}>
      <button
        className={styles.menuToggle}
        type="button"
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
      >
        <span className={styles.menuToggleLine} />
        <span className={styles.menuToggleLine} />
        <span className={styles.menuToggleLine} />
      </button>

      <button
        className={styles.backdrop}
        data-open={isMenuOpen}
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        onClick={() => setIsMenuOpen(false)}
      />

      <nav
        id="primary-navigation"
        className={styles.linkWrapper}
        data-open={isMenuOpen}
        aria-label="Primary navigation"
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            replace={pathname === "/"}
            className={`${styles.linkItem} text-body-lg`}
            data-active={
              pathname === "/" &&
              link.href === (activeAnchor === "top" ? "/" : `/#${activeAnchor}`)
                ? "true"
                : "false"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <button
          className={styles.themeToggle}
          type="button"
          onClick={changeThemeInstantly}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          aria-pressed={theme === "dark"}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          <Sun
            className={`${styles.themeIcon} ${styles.sunIcon}`}
            aria-hidden="true"
            focusable="false"
          />
          <Moon
            className={`${styles.themeIcon} ${styles.moonIcon}`}
            aria-hidden="true"
            focusable="false"
          />
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
