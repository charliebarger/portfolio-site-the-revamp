import styles from "./pill.module.css";

interface PillProps {
  text: string;
}

const Pill = ({ text }: PillProps) => {
  return (
    <div className={styles.pill}>
      <span className={`text-body-sm `}>Hello World</span>
    </div>
  );
};

export default Pill;
