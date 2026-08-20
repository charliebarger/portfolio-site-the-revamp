import React from "react";
import clsx from "clsx";
import styles from "./linkWithIcon.module.css";

interface LinkProps {
  icon?: React.ReactElement;
  iconColor?: "default" | "action";
  text?: string;
  href: string;
}

const ContactLink = ({
  icon,
  iconColor = "default",
  text,
  href,
}: LinkProps) => {
  return (
    <a
      className={styles.linkWrapper}
      target="_blank"
      rel="noreferrer"
      href={href}
    >
      {icon && (
        <div className={clsx(styles.icon, styles[iconColor])}>{icon}</div>
      )}
      {text && <span className={styles.label}>{text}</span>}
    </a>
  );
};

export default ContactLink;
