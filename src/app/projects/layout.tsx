import type { ReactNode } from "react";
import Footer from "../UI/Footer/Footer";
import styles from "./projectsLayout.module.css";

interface ProjectsLayoutProps {
  children: ReactNode;
}

export default function ProjectsLayout({ children }: ProjectsLayoutProps) {
  return (
    <div className={styles.shell}>
      {children}
      <Footer />
    </div>
  );
}
