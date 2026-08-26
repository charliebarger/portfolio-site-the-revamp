import styles from "./reflectionsCard.module.css";

export interface ReflectionsCardProps {
  className?: string;
  paragraphs: string[];
}

const ReflectionsCard = ({
  className,
  paragraphs,
}: ReflectionsCardProps) => (
  <aside
    className={`${styles.card}${className ? ` ${className}` : ""}`}
    aria-label="Project reflections"
  >
    {paragraphs.map((paragraph, index) => (
      <p key={`${paragraph}-${index}`}>{paragraph}</p>
    ))}
  </aside>
);

export default ReflectionsCard;
