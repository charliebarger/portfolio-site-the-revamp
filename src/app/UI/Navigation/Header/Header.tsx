"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  const pathname = usePathname();
  const clickTimesRef = useRef<number[]>([]);
  const wobbleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (wobbleTimeoutRef.current) clearTimeout(wobbleTimeoutRef.current);
      document.body.classList.remove("page-wobble");
    },
    [],
  );

  const handleLogoClick = () => {
    if (pathname !== "/") return;

    const now = Date.now();
    clickTimesRef.current = [...clickTimesRef.current, now].filter(
      (clickTime) => now - clickTime <= 1500,
    );

    if (clickTimesRef.current.length < 3) return;

    clickTimesRef.current = [];
    document.body.classList.remove("page-wobble");
    void document.body.offsetWidth;
    document.body.classList.add("page-wobble");

    if (wobbleTimeoutRef.current) clearTimeout(wobbleTimeoutRef.current);
    wobbleTimeoutRef.current = setTimeout(() => {
      document.body.classList.remove("page-wobble");
    }, 800);
  };

  return (
    <header className={styles.header}>
      <section className={styles.textContainer}>
        {pathname === "/" ? (
          <button
            className={styles.logo}
            type="button"
            aria-label="Charlie Barger"
            data-interactive="true"
            onClick={handleLogoClick}
          >
            <h1 className={styles.name}>Charlie Barger</h1>
            <span className={styles.title}>UI Engineer</span>
          </button>
        ) : (
          // The project currently has incompatible React/Next Link types.
          // eslint-disable-next-line @next/next/no-html-link-for-pages
          <a
            className={styles.logo}
            href="/"
            aria-label="Go to Charlie Barger’s home page"
          >
            <h1 className={styles.name}>Charlie Barger</h1>
            <span className={styles.title}>UI Engineer</span>
          </a>
        )}
      </section>
      <NavBar />
    </header>
  );
};

export default Header;
