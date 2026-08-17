"use client";

import styles from "./navBar.module.css";
import { usePathname } from "next/navigation";
import Moon from "@/assets/moon.svg?react";
import Sun from "@/assets/sun.svg?react";
import { useThemeStore, type Theme } from "@/stores/themeStore";
import { useEffect, useState } from "react";

const isTheme = (value: string | undefined): value is Theme =>
  value === "light" || value === "dark";

interface NavBarItems {
  href: string;
  label: string;
}

const links: NavBarItems[] = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const NavBar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useThemeStore((state) => state.theme);
  const initializeTheme = useThemeStore((state) => state.initializeTheme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

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

    void useThemeStore.persist.rehydrate();

    const observer = new MutationObserver(syncFromDocument);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, [initializeTheme]);

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
          <a
            key={link.href}
            href={link.href}
            className={`${styles.linkItem} text-body-lg`}
            data-active={pathname === link.href ? "true" : "false"}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <button
          className={styles.themeToggle}
          type="button"
          onClick={toggleTheme}
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
