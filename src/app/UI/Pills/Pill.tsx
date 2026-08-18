import styles from "./pill.module.css";

interface PillProps {
  text: string;
}

const Pill = ({ text }: PillProps) => {
  return (
    <div className={styles.pill}>
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default Pill;
