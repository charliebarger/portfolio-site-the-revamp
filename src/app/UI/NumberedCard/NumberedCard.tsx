import Image from "next/image";
import ContentHeader from "../ContentHeader/ContentHeader";
import styles from "./numberedCard.module.css";

interface NumberedCardImage {
  alt: string;
  priority?: boolean;
  src: string;
}

interface NumberedCardProps {
  description?: string;
  eyebrow?: string;
  image?: NumberedCardImage;
  number: string;
  title: string;
  titleId?: string;
}

const NumberedCard = ({
  description,
  eyebrow,
  image,
  number,
  title,
  titleId,
}: NumberedCardProps) => (
  <article className={styles.card} aria-labelledby={titleId}>
    <div className={styles.content}>
      <div className={styles.headerRow}>
        <ContentHeader
          className={styles.header}
          description={description}
          eyebrow={eyebrow}
          headingLevel={3}
          title={title}
          titleId={titleId}
        />
        <p className={styles.number} aria-hidden="true">
          {number}
        </p>
      </div>

      {image && (
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 47.999rem) calc(100vw - 5rem), (max-width: 90rem) calc(100vw - 16rem), 1152px"
            priority={image.priority}
          />
        </div>
      )}
    </div>
  </article>
);

export default NumberedCard;
