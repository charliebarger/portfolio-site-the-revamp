import styles from "./footer.module.css";
import SmoothAnchorLink from "../SmoothAnchorLink";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.identity}>
      <p className={styles.name}>Charlie Barger</p>
      <p className={styles.role}>UI Engineer</p>
      <p className={styles.copyright}>© 2026</p>
    </div>
    <nav className={styles.links} aria-label="Footer navigation">
      <SmoothAnchorLink href="/">Home</SmoothAnchorLink>
      <SmoothAnchorLink href="/#work">Work</SmoothAnchorLink>
      <SmoothAnchorLink href="/#about">About</SmoothAnchorLink>
      <SmoothAnchorLink href="/#contact">Contact</SmoothAnchorLink>
    </nav>
  </footer>
);

export default Footer;
