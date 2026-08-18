import Image from "next/image";
import styles from "./skillCard.module.css";

export interface SkillCardProps {
  title: string;
  description: string;
  icon: string;
}

const SkillCard = ({ title, description, icon }: SkillCardProps) => (
  <article className={styles.card}>
    <Image
      className={styles.icon}
      src={icon}
      alt=""
      width={50}
      height={50}
      aria-hidden="true"
    />
    <div className={styles.copy}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  </article>
);

export default SkillCard;
