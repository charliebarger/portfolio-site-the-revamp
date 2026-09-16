"use client";

import { usePathname } from "next/navigation";
import styles from "./footer.module.css";
import NextLink, { type LinkProps } from "next/link";
import type { ComponentType } from "react";

// Adapt Next’s generated JSX return type to the app’s React types.
const Link = NextLink as unknown as ComponentType<LinkProps<string>>;

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className={styles.footer}>
      <div className={styles.identity}>
        <p className={styles.name}>Charlie Barger</p>
        <p className={styles.role}>UI Engineer</p>
        <p className={styles.copyright}>© 2026</p>
      </div>
      <nav className={styles.links} aria-label="Footer navigation">
        <Link replace={pathname === "/"} href="/">Home</Link>
        <Link replace={pathname === "/"} href="/#work">Work</Link>
        <Link replace={pathname === "/"} href="/#about">About</Link>
        <Link replace={pathname === "/"} href="/#contact">Contact</Link>
      </nav>
    </footer>
  );
};

export default Footer;
