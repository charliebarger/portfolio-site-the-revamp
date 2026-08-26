import Image from "next/image";
import clsx from "clsx";
import styles from "./processCardLarge.module.css";

export interface ProcessCardLargeImage {
  alt: string;
  src: string;
}

interface ProcessCardLargeProps {
  className?: string;
  description: string;
  imageSide?: "right" | "left" | "bottom" | "bottom-border";
  images: ProcessCardLargeImage[];
  layout?: "desktop" | "mobile";
  title: string;
  width?: "fill" | "hug";
}

const ProcessCardLarge = ({
  className,
  description,
  imageSide = "right",
  images,
  layout = "desktop",
  title,
  width = "fill",
}: ProcessCardLargeProps) => {
  const visibleImages = images.slice(0, imageSide.startsWith("bottom") ? 3 : layout === "mobile" ? 2 : 1);

  return (
    <article
      className={clsx(
        styles.card,
        styles[layout],
        styles[width],
        styles[imageSide],
        className,
      )}
    >
      <div className={styles.content}>
        <div className={styles.copy}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className={styles.gallery}>
          {visibleImages.map((image, index) => (
            <div
              className={clsx(
                styles.imageFrame,
                imageSide === "bottom-border" && styles.borderedImage,
              )}
              key={`${image.src}-${index}`}
            >
              <Image
                className={styles.image}
                src={image.src}
                alt={image.alt}
                fill
                sizes={
                  imageSide.startsWith("bottom")
                    ? "(max-width: 47.999rem) calc(100vw - 4rem), 25rem"
                    : "(max-width: 47.999rem) calc(50vw - 2rem), 37.5rem"
                }
              />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProcessCardLarge;
