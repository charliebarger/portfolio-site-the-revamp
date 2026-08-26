import Image from "next/image";
import type { ReactNode } from "react";
import styles from "./hero.module.css";

export type HeroVariant = "slider" | "mobile" | "desktop";

interface PhoneMockup {
  src: string;
  alt: string;
  label: string;
}

interface HeroProps {
  title: string;
  compactTitle?: boolean;
  whoMadeIt?: string;
  subheading?: string;
  description?: string;
  variant?: HeroVariant;
  slider?: ReactNode;
  phones?: PhoneMockup[];
  desktopImage?: { src: string; alt: string };
  researchHref?: string;
}

const Hero = ({
  title,
  compactTitle = false,
  whoMadeIt,
  subheading,
  description,
  variant = "slider",
  slider,
  phones = [],
  desktopImage,
  researchHref,
}: HeroProps) => (
  <section className={styles.hero} data-variant={variant}>
    <div className={styles.copy}>
      <div className={styles.copyGroup}>
        <h1
          className={`${styles.title} ${compactTitle ? styles.compactTitle : ""}`}
        >
          {title}
        </h1>
        {whoMadeIt && <p className={styles.whoMadeIt}>{whoMadeIt}</p>}
        {subheading && <h2 className={styles.subheading}>{subheading}</h2>}
        {description && <p className={styles.description}>{description}</p>}
      </div>
      {researchHref && (
        <a className={styles.researchLink} href={researchHref}>
          Read the Published Research
        </a>
      )}
    </div>
    {variant === "slider" && slider && (
      <div className={styles.slider}>{slider}</div>
    )}
    {variant === "mobile" && phones.length > 0 && (
      <div className={styles.phones}>
        {phones.map((phone) => (
          <figure className={styles.phone} key={phone.src}>
            <Image
              className={styles.phoneImage}
              src={phone.src}
              alt={phone.alt}
              width={214}
              height={434}
              sizes="214px"
              priority
            />
            {phone.label && <figcaption>{phone.label}</figcaption>}
          </figure>
        ))}
      </div>
    )}
    {variant === "desktop" && desktopImage && (
      <div className={styles.desktopVisual}>
        <Image
          className={styles.desktopImage}
          src={desktopImage.src}
          alt={desktopImage.alt}
          fill
          sizes="(max-width: 47.999rem) calc(100vw - 2rem), 600px"
          priority
        />
      </div>
    )}
  </section>
);

export default Hero;
