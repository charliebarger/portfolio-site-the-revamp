import styles from "./header.module.css";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.textContainer}>
        <h1 className={styles.name}>Charlie Barger</h1>
        <span className={styles.title}>UI Engineer</span>
      </section>
      <NavBar />
    </header>
  );
};

export default Header;
