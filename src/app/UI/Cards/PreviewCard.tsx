import type { Route } from "next";
import styles from "./card.module.css";
import buttonStyles from "../Button/button.module.css";
import Image from "next/image";
import Pill from "../Pills/Pill";
import Button from "../Button/button";
import ArrowForward from "@/assets/arrow_forward.svg?react";

export interface PreviewCardProps<T extends string = string> {
  side: "left" | "right";
  img: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  text: {
    title: string;
    subtext: string;
    description: string;
    pills: string[];
  };
  href: Route<T>;
}

const PreviewCard = <T extends string>({
  side,
  img,
  text,
  href,
}: PreviewCardProps<T>) => {
  return (
    <div className={styles.previewCard} data-side={side}>
      <Image
        src={img.src}
        alt={img.alt}
        width={img.width}
        height={img.height}
        className={styles.image}
      />
      <section className={styles.textContainer}>
        <div className={styles.textWrapper}>
          <div className={styles.headerWrapper}>
            <h3 className={styles.title}>{text.title}</h3>
            <span className={`${styles.subtext} text-body-xs`}>
              {text.subtext}
            </span>
          </div>
          <p className="text-body-md">{text.description}</p>
          <div className={styles.pillsContainer}>
            {text.pills.map((pillText, index) => (
              <Pill key={`${pillText}-${index}`} text={pillText} />
            ))}
          </div>
        </div>
        <Button
          kind="link"
          href={href}
          variant="default"
          shape="pill"
          text="Learn More"
          iconRight={
            <ArrowForward
              className={buttonStyles.sway}
              aria-hidden="true"
              focusable="false"
            />
          }
        />
      </section>
    </div>
  );
};

export default PreviewCard;
