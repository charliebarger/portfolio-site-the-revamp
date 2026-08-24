import type { ReactNode } from "react";
import GradientHero from "../GradientHero/GradientHero";
import styles from "./projectHero.module.css";

interface ProjectHeroProps {
  children: ReactNode;
}

const ProjectHero = ({ children }: ProjectHeroProps) => (
  <GradientHero className={styles.hero}>
    <div className={styles.content}>{children}</div>
  </GradientHero>
);

export default ProjectHero;
