import Image from "next/image";
import styles from "./highlightCard.module.css";

export interface HighlightCardProps {
  className?: string;
  description: string;
  icon?: string;
  title: string;
}

const HighlightCard = ({
  className,
  description,
  icon = "/highlight-card/device-mobile.svg",
  title,
}: HighlightCardProps) => (
  <article className={`${styles.card}${className ? ` ${className}` : ""}`}>
    <div className={styles.iconTile} aria-hidden="true">
      <Image className={styles.icon} src={icon} alt="" width={36} height={36} />
    </div>
    <div className={styles.copy}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  </article>
);

export default HighlightCard;
