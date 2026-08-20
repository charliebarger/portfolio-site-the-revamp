import styles from "./footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.identity}>
      <p className={styles.name}>Charlie Barger</p>
      <p className={styles.role}>UI Engineer</p>
      <p className={styles.copyright}>© 2026</p>
    </div>
    <nav className={styles.links} aria-label="Footer navigation">
      {/* The project currently has incompatible React/Next Link types. */}
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a href="/#top">Home</a>
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a href="/#work">Work</a>
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a href="/#about">About</a>
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a href="/#contact">Contact</a>
    </nav>
  </footer>
);

export default Footer;
