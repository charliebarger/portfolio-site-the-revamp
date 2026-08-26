import clsx from "clsx";
import styles from "./contentHeader.module.css";

interface ContentHeaderProps {
  className?: string;
  description?: string;
  eyebrow?: string;
  extraInfo?: string;
  headingLevel?: 2 | 3;
  title: string;
  titleId?: string;
}

const ContentHeader = ({
  className,
  description,
  eyebrow,
  extraInfo,
  headingLevel = 2,
  title,
  titleId,
}: ContentHeaderProps) => {
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <header className={clsx(styles.header, className)}>
      {eyebrow && (
        <p className={clsx("text-body-sm-semibold", styles.eyebrow)}>
          {eyebrow}
        </p>
      )}

      <div className={styles.titleGroup}>
        <Heading
          id={titleId}
          className={clsx(
            headingLevel === 2 ? "text-heading-2" : "text-heading-3",
            styles.title,
          )}
        >
          {title}
        </Heading>
        {extraInfo && (
          <p className={clsx("text-body-sm-semibold", styles.extraInfo)}>
            {extraInfo}
          </p>
        )}
      </div>

      {description && (
        <p className={clsx("text-body-lg", styles.description)}>
          {description}
        </p>
      )}
    </header>
  );
};

export default ContentHeader;
