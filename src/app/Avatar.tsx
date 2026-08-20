"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

export default function Avatar() {
  const wasAtTopRef = useRef(true);
  const [isLoadingAnimation, setIsLoadingAnimation] = useState(true);

  useEffect(() => {
    wasAtTopRef.current = window.scrollY <= 1;
    const handleScroll = () => {
      const isAtTop = window.scrollY <= 1;
      if (isAtTop && !wasAtTopRef.current) {
        setIsLoadingAnimation(true);
      }
      wasAtTopRef.current = isAtTop;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.avatar} aria-hidden="true">
      <div
        className={`${styles.avatarSprite} ${
          isLoadingAnimation ? styles.avatarSpriteLoading : ""
        }`}
        onAnimationEnd={() => setIsLoadingAnimation(false)}
      />
    </div>
  );
}
