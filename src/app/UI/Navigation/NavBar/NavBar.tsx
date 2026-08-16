"use client";

import Link from "next/link";
import styles from "./navBar.module.css";
import { usePathname } from "next/navigation";
import type { Route } from "next";
import Moon from "@/assets/moon.svg?react";
import Sun from "@/assets/sun.svg?react";
import { useThemeStore, type Theme } from "@/stores/themeStore";
import { useEffect } from "react";

const isTheme = (value: string | undefined): value is Theme =>
  value === "light" || value === "dark";

interface NavBarItems {
  href: Route<string>;
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

  return (
    <section className={styles.linkWrapper}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`${styles.linkItem} text-body-lg`}
          data-active={pathname === link.href ? "true" : "false"}
        >
          {link.label}
        </Link>
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
    </section>
  );
};

export default NavBar;
