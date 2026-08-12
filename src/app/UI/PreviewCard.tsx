import type { Route } from "next";
import Link from "next/link";
import styles from "./card.module.css";

interface CardProps<T extends string> {
  side: "left" | "right";
  img: string;
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
}: CardProps<T>) => {
  return (
    <Link className={styles.previewCard} href={href}>
      hi
    </Link>
  );
};

export default PreviewCard;
