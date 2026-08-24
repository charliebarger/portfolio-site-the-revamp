import type { ReactElement } from "react";
import styles from "./projectcard.module.css";
import CircleCheck from "@/assets/circle-check.svg?react";

interface ProjectCardProps {
  title: string;
  listItems: string[];
  icon?: ReactElement | "check" | null;
}

const ProjectCard = ({ title, listItems, icon }: ProjectCardProps) => {
  return (
    <article className={styles.cardWrapper}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.listWrapper}>
        {listItems.map((item, index) => (
          <li className="text-body-md" key={`${item}-${index}`}>
            {icon && (
              <span className={styles.iconWrapper}>
                {icon === "check" && <CircleCheck />}
                {icon && icon !== "check" && icon}
              </span>
            )}
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ProjectCard;
