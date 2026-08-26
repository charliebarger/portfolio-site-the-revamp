import type { ReactNode } from "react";
import styles from "./processCard.module.css";

interface ProcessCardProps {
  description: string;
  svg: ReactNode;
}

const ProcessCard = ({ description, svg }: ProcessCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.topWrapper}>
        <div className={styles.imgWrapper}>{svg}</div>
      </div>
      <div className={styles.textWrapper}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProcessCard;
