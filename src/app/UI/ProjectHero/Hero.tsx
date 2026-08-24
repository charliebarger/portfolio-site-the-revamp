import React from "react";
import styles from "./hero.module.css";

interface HeroProps {
  title: string;
  whoMadeIt?: string;
  subheading?: string;
  description?: string;
}

const Hero = ({ title, whoMadeIt, subheading, description }: HeroProps) => {
  return (
    <section>
      <div className={styles.wrapper}>
        <h1 className={styles.projectCard}>{title}</h1>
        {whoMadeIt && (
          <span className={`${styles.whoMadeIt} text-body-xs`}>
            {whoMadeIt}
          </span>
        )}
        {subheading && (
          <h2 className={`${styles.subheading} text-heading-5`}>
            {subheading}
          </h2>
        )}
        {description && (
          <span className={`${styles.description} text-body-lg`}>
            {description}
          </span>
        )}
      </div>
    </section>
  );
};

export default Hero;
