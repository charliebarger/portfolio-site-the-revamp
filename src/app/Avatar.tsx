"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Avatar() {
  const [isLoadingAnimation, setIsLoadingAnimation] = useState(true);

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
