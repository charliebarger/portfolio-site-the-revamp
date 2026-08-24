import clsx from "clsx";
import type { HTMLAttributes } from "react";
import styles from "./gradientHero.module.css";

type GradientHeroProps = HTMLAttributes<HTMLElement>;

const GradientHero = ({ className, children, ...props }: GradientHeroProps) => (
  <section className={clsx(styles.hero, className)} {...props}>
    {children}
  </section>
);

export default GradientHero;
